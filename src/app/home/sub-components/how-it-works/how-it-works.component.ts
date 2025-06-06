import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';

interface WorkflowStep {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit, OnDestroy {

  @ViewChildren('stepElement') stepElements!: QueryList<ElementRef>;

  readonly steps: WorkflowStep[] = [
    {
      id: 1,
      icon: '📝',
      title: 'Fill the Order Form',
      description: 'Complete our simple online form with your requirements. Share your style preferences, measurements, and special requests to help us understand your vision perfectly.'
    },
    {
      id: 2,
      icon: '🏠',
      title: 'Home Visit & Consultation',
      description: 'Our expert team visits your location for detailed consultation. We\'ll discuss designs, take precise measurements, and provide you with a comprehensive bill for your custom order.'
    },
    {
      id: 3,
      icon: '✂️',
      title: 'Crafting Your Order',
      description: 'Our skilled artisans begin crafting your custom pieces with attention to every detail. You\'ll receive regular status updates throughout the creation process to keep you informed.'
    },
    {
      id: 4,
      icon: '🚚',
      title: 'Timely Delivery',
      description: 'Your beautifully crafted order is delivered right to your doorstep on schedule. We ensure the same convenient location where we first met you for a seamless experience.'
    }
  ];

  private observer!: IntersectionObserver;
  visibleSteps = new Set<number>();

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
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const stepId = Number(entry.target.getAttribute('data-step-id'));
        if (entry.isIntersecting) {
          this.visibleSteps.add(stepId);
        } else {
          this.visibleSteps.delete(stepId);
        }
      });
    }, options);

    // Observe elements after view init
    setTimeout(() => {
      this.stepElements.forEach(element => {
        this.observer.observe(element.nativeElement);
      });
    });
  }

  isStepVisible(stepId: number): boolean {
    return this.visibleSteps.has(stepId);
  }

  trackByStepId(index: number, step: WorkflowStep): number {
    return step.id;
  }

}
