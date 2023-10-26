import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTableItemsComponent } from './document-table-items.component';

describe('DocumentTableItemsComponent', () => {
  let component: DocumentTableItemsComponent;
  let fixture: ComponentFixture<DocumentTableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTableItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
