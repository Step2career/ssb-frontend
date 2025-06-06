import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList  } from '@angular/core';

interface ServiceBenefit {
  id: number;
  icon: string;
  title: string;
  description: string;
  features?: string[];
  category: 'service' | 'quality' | 'variety';
}

@Component({
  selector: 'app-what-do-i-get',
  templateUrl: './what-do-i-get.component.html',
  styleUrls: ['./what-do-i-get.component.scss']
})
export class WhatDoIGetComponent implements OnInit, OnDestroy {

  @ViewChildren('benefitElement') benefitElements!: QueryList<ElementRef>;

  readonly benefits: ServiceBenefit[] = [
    {
      id: 1,
      icon: '🚪',
      title: 'Everything at Your Doorstep',
      description: 'Experience ultimate convenience with our complete doorstep service from consultation to delivery.',
      category: 'service'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Timely Delivery & Swift Timeline',
      description: 'Get your orders delivered on schedule with our efficient and reliable timeline management.',
      category: 'service'
    },
    {
      id: 3,
      icon: '🌊',
      title: 'Ocean of Trendy Designs',
      description: 'Choose from an extensive collection of contemporary and fashionable designs tailored to your style.',
      category: 'variety'
    },
    {
      id: 4,
      icon: '✋',
      title: 'Expert Craftsmen Work',
      description: 'Experience the finest quality with skilled artisans who bring precision and artistry to every piece.',
      category: 'quality'
    },
    {
      id: 5,
      icon: '💰',
      title: 'Affordable Cost',
      description: 'Premium quality fashion at competitive prices that fit your budget without compromising on style.',
      category: 'service'
    },
    {
      id: 6,
      icon: '👗',
      title: 'Complete Range of Styles',
      description: 'From traditional to contemporary, we cover all your fashion needs for every occasion.',
      features: [
        'Ethnic Wear',
        'Western Outfits',
        'Casual Wear',
        'Party Wear',
        'Office Wear',
        'Occasional Wear'
      ],
      category: 'variety'
    }
  ];

  private observer!: IntersectionObserver;
  visibleBenefits = new Set<number>();
  hoveredBenefit: number | null = null;

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const benefitId = Number(entry.target.getAttribute('data-benefit-id'));
        if (entry.isIntersecting) {
          this.visibleBenefits.add(benefitId);
        }
      });
    }, options);

    setTimeout(() => {
      this.benefitElements.forEach(element => {
        this.observer.observe(element.nativeElement);
      });
    });
  }

  isBenefitVisible(benefitId: number): boolean {
    return this.visibleBenefits.has(benefitId);
  }

  onBenefitHover(benefitId: number): void {
    this.hoveredBenefit = benefitId;
  }

  onBenefitLeave(): void {
    this.hoveredBenefit = null;
  }

  trackByBenefitId(index: number, benefit: ServiceBenefit): number {
    return benefit.id;
  }

  getCategoryClass(category: string): string {
    return `benefit--${category}`;
  }

}
