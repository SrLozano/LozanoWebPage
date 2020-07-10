import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals'; //Global variables

@Component({
  selector: 'app-right-tab',
  templateUrl: './right-tab.component.html',
  styleUrls: ['./right-tab.component.scss']
})
export class RightTabComponent implements OnInit {

  name = myGlobals.name;
  job = myGlobals.job;
  description = myGlobals.description;

  constructor() { }

  ngOnInit(): void {
  }

}
