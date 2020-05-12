import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColorComponent } from './info-color.component';

describe('InfoColorComponent', () => {
  let component: InfoColorComponent;
  let fixture: ComponentFixture<InfoColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
