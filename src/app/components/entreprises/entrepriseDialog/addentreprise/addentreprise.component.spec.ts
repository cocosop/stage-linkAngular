import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentrepriseComponent } from './addentreprise.component';

describe('AddentrepriseComponent', () => {
  let component: AddentrepriseComponent;
  let fixture: ComponentFixture<AddentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddentrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
