import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapShowComponent } from './map-show.component';

describe('MapShowComponent', () => {
  let component: MapShowComponent;
  let fixture: ComponentFixture<MapShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
