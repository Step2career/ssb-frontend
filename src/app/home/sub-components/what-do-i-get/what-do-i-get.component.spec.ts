import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDoIGetComponent } from './what-do-i-get.component';

describe('WhatDoIGetComponent', () => {
  let component: WhatDoIGetComponent;
  let fixture: ComponentFixture<WhatDoIGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatDoIGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDoIGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
