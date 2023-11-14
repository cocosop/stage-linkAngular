import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostulationComponent } from './addpostulation.component';

describe('AddpostulationComponent', () => {
  let component: AddpostulationComponent;
  let fixture: ComponentFixture<AddpostulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddpostulationComponent]
    });
    fixture = TestBed.createComponent(AddpostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
