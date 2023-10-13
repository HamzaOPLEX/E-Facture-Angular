import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFactureItemModalComponent } from './add-new-facture-item-modal.component';

describe('AddNewFactureItemModalComponent', () => {
  let component: AddNewFactureItemModalComponent;
  let fixture: ComponentFixture<AddNewFactureItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewFactureItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewFactureItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
