import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceDetailsComponent } from './seance-details.component';

describe('SeanceDetailsComponent', () => {
  let component: SeanceDetailsComponent;
  let fixture: ComponentFixture<SeanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
