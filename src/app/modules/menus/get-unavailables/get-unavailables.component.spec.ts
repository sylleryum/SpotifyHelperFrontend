import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUnavailablesComponent } from './get-unavailables.component';

describe('GetUnavailablesComponent', () => {
  let component: GetUnavailablesComponent;
  let fixture: ComponentFixture<GetUnavailablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUnavailablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUnavailablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
