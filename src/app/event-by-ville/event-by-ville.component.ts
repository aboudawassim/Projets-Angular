import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-by-ville',
  templateUrl: './event-by-ville.component.html',
  styleUrls: ['./event-by-ville.component.scss']
})
export class EventByVilleComponent implements OnInit {
  lieu_departSearch;
  lieu_arriveSearch;
  date_departSearch ;
  term;

  constructor() { }

  ngOnInit(): void {
  }

}
