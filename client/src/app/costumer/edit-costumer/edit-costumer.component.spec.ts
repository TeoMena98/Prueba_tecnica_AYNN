import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCostumerComponent } from './edit-costumer.component';

describe('EditCostumerComponent', () => {
  let component: EditCostumerComponent;
  let fixture: ComponentFixture<EditCostumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCostumerComponent]
    });
    fixture = TestBed.createComponent(EditCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
