import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals'; //Global variables
import { TabHeaderComponent } from '../tab-header/tab-header.component';
import {RightTabComponent} from '../right-tab/right-tab.component'

@Component({
  selector: 'app-left-tab',
  templateUrl: './left-tab.component.html',
  providers: [TabHeaderComponent, RightTabComponent],
  styleUrls: ['./left-tab.component.scss']
})
export class LeftTabComponent implements OnInit {

  isChecked1 = true;
  isChecked2 = true;

  //Importing the globals variables
  name = myGlobals.name;
  job = myGlobals.job;

  constructor(public tabHeader:TabHeaderComponent, public rightTab:RightTabComponent) { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  toDark(){
    this.rightTab.darkModeRight();
    this.tabHeader.toDark();
    document.getElementById("main-tab").style.backgroundColor = "#151C21";
  }

  dark(){
    console.log(this.isChecked1);
  }

  language(){
    console.log(this.isChecked2);
  }



}
