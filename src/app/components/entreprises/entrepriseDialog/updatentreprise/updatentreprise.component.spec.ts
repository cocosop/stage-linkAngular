import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatentrepriseComponent } from './updatentreprise.component';

describe('UpdatentrepriseComponent', () => {
  let component: UpdatentrepriseComponent;
  let fixture: ComponentFixture<UpdatentrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatentrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
