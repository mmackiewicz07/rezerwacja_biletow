import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPlaceComponent } from './set-place.component';

describe('SetPlaceComponent', () => {
  let component: SetPlaceComponent;
  let fixture: ComponentFixture<SetPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
