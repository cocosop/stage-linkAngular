import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletestageComponent } from './deletestage.component';

describe('DeletestageComponent', () => {
  let component: DeletestageComponent;
  let fixture: ComponentFixture<DeletestageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletestageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
