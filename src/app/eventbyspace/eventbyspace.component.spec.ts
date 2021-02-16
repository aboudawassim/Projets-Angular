import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbyspaceComponent } from './eventbyspace.component';

describe('EventbyspaceComponent', () => {
  let component: EventbyspaceComponent;
  let fixture: ComponentFixture<EventbyspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbyspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbyspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
