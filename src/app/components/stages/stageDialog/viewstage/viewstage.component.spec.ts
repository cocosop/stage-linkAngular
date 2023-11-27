import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstageComponent } from './viewstage.component';

describe('ViewstageComponent', () => {
  let component: ViewstageComponent;
  let fixture: ComponentFixture<ViewstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewstageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
