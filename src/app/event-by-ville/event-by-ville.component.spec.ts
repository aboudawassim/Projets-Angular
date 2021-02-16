import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventByVilleComponent } from './event-by-ville.component';

describe('EventByVilleComponent', () => {
  let component: EventByVilleComponent;
  let fixture: ComponentFixture<EventByVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventByVilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventByVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
