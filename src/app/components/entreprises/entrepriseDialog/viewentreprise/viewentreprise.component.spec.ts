import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewentrepriseComponent } from './viewentreprise.component';

describe('ViewentrepriseComponent', () => {
  let component: ViewentrepriseComponent;
  let fixture: ComponentFixture<ViewentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewentrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
