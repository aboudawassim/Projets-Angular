import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
gotoeventslist(){
  this.router.navigate(['/event-list']) ;
}
gotoeventsspace(){
  this.router.navigate(['/space']) ;
}
gotoeventsville(){
  this.router.navigate(['/ville']) ;
}
}
