import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlCreateComponent } from './bl-create.component';

describe('BlCreateComponent', () => {
  let component: BlCreateComponent;
  let fixture: ComponentFixture<BlCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
