import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'ece9065-fp';
  currentUser: any;

  constructor() {

  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('userdata'));
  }
}
