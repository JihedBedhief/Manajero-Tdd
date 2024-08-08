import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddttComponent } from './addtt.component';

describe('AddttComponent', () => {
  let component: AddttComponent;
  let fixture: ComponentFixture<AddttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
