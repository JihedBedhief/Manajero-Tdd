import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDDComponent } from './tdd.component';

describe('TDDComponent', () => {
  let component: TDDComponent;
  let fixture: ComponentFixture<TDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
