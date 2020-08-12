import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals'; //Global variables


@Component({
  selector: 'app-left-tab',
  templateUrl: './left-tab.component.html',
  styleUrls: ['./left-tab.component.scss']
})
export class LeftTabComponent implements OnInit {

  //Importing the globals variables
  name = myGlobals.name;
  job = myGlobals.job;
  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

}
