import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './sub-components/hero-section/hero-section.component';
import { HomeComponent } from './home.component';
import { HowItWorksComponent } from './sub-components/how-it-works/how-it-works.component';
import { WhatDoIGetComponent } from './sub-components/what-do-i-get/what-do-i-get.component';
import { WhatCustomersSayComponent } from './sub-components/what-customers-say/what-customers-say.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroSectionComponent, HomeComponent, HowItWorksComponent, WhatDoIGetComponent, WhatCustomersSayComponent]
})
export class HomeModule { }
