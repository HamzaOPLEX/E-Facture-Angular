import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlEditComponent } from './bl-edit.component';

describe('BlEditComponent', () => {
  let component: BlEditComponent;
  let fixture: ComponentFixture<BlEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
