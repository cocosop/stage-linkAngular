import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletentrepriseComponent } from './deletentreprise.component';

describe('DeletentrepriseComponent', () => {
  let component: DeletentrepriseComponent;
  let fixture: ComponentFixture<DeletentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletentrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
