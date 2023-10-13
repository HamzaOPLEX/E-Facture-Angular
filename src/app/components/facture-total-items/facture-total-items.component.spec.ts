import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureTotalItemsComponent } from './facture-total-items.component';

describe('FactureTotalItemsComponent', () => {
  let component: FactureTotalItemsComponent;
  let fixture: ComponentFixture<FactureTotalItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureTotalItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureTotalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
