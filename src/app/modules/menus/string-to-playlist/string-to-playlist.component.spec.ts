import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringToPlaylistComponent } from './string-to-playlist.component';

describe('StringToPlaylistComponent', () => {
  let component: StringToPlaylistComponent;
  let fixture: ComponentFixture<StringToPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringToPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringToPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
