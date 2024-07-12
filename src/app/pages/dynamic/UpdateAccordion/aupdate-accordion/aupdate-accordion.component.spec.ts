import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AupdateAccordionComponent } from './aupdate-accordion.component';

describe('AupdateAccordionComponent', () => {
  let component: AupdateAccordionComponent;
  let fixture: ComponentFixture<AupdateAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AupdateAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AupdateAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
