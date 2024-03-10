import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareRequestComponent } from './software-request.component';

describe('SoftwareRequestComponent', () => {
  let component: SoftwareRequestComponent;
  let fixture: ComponentFixture<SoftwareRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareRequestComponent]
    });
    fixture = TestBed.createComponent(SoftwareRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
