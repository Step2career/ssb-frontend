import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList  } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  quote: string;
  rating: number;
  location: string;
}

@Component({
  selector: 'app-what-customers-say',
  templateUrl: './what-customers-say.component.html',
  styleUrls: ['./what-customers-say.component.scss']
})
export class WhatCustomersSayComponent implements OnInit, OnDestroy {

  currentSlide = 0;
  autoSlideInterval: any;
  
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'Absolutely love the collection! The quality is exceptional and the customer service is outstanding. I always find the perfect outfit here.',
      rating: 5,
      location: 'New York'
    },
    {
      id: 2,
      name: 'Emily Davis',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      quote: 'This boutique has transformed my wardrobe completely. Every piece I buy here makes me feel confident and beautiful.',
      rating: 5,
      location: 'Los Angeles'
    },
    {
      id: 3,
      name: 'Jessica Wilson',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      quote: 'The styling advice and personal attention I receive here is unmatched. They truly understand fashion and what works for each individual.',
      rating: 5,
      location: 'Chicago'
    },
    {
      id: 4,
      name: 'Amanda Brown',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'From casual wear to evening gowns, they have everything. The attention to detail and craftsmanship is simply amazing.',
      rating: 5,
      location: 'Miami'
    },
    {
      id: 5,
      name: 'Rachel Green',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'Shopping here is always a delightful experience. The staff is knowledgeable and the collection is always on-trend and elegant.',
      rating: 5,
      location: 'Boston'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      quote: 'I have been a loyal customer for years. The boutique consistently delivers high-quality, fashionable pieces that exceed my expectations.',
      rating: 5,
      location: 'Seattle'
    }
  ];

  get totalSlides(): number {
    return this.slides.length;
  }

  get visibleTestimonials(): Testimonial[] {
    const startIndex = this.currentSlide * 3;
    return this.testimonials.slice(startIndex, startIndex + 3);
  }

  get slides(): Testimonial[][] {
    const slides: Testimonial[][] = [];
    for (let i = 0; i < this.testimonials.length; i += 3) {
      slides.push(this.testimonials.slice(i, i + 3));
    }
    return slides;
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  onMouseEnter(): void {
    this.stopAutoSlide();
  }

  onMouseLeave(): void {
    this.startAutoSlide();
  }

  getStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < rating);
  }
}
