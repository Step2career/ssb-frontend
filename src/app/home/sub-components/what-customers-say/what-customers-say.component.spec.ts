import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCustomersSayComponent } from './what-customers-say.component';

describe('WhatCustomersSayComponent', () => {
  let component: WhatCustomersSayComponent;
  let fixture: ComponentFixture<WhatCustomersSayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatCustomersSayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatCustomersSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
