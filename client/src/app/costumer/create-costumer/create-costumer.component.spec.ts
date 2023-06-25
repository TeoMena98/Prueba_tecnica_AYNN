import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCostumerComponent } from './create-costumer.component';

describe('CreateCostumerComponent', () => {
  let component: CreateCostumerComponent;
  let fixture: ComponentFixture<CreateCostumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCostumerComponent]
    });
    fixture = TestBed.createComponent(CreateCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
