import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtudiantComponent } from './update-etudiant.component';

describe('UpdateEtudiantComponent', () => {
  let component: UpdateEtudiantComponent;
  let fixture: ComponentFixture<UpdateEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
