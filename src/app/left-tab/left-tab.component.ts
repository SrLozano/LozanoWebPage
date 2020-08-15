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

  isCheckedDark = true;
  isChecked2 = false;

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
    if(this.isCheckedDark == true){ //Dark
      //We change the right tab, the headers and the left tab
      console.log("Dark mode.....");
      this.rightTab.darkModeRight();
      this.tabHeader.toDark();
      document.getElementById("main-tab").style.backgroundColor = "#151C21";
    } else{ //Light
      //We change the right tab, the headers and the left tab
      console.log("Light mode.....");
      this.tabHeader.toLight();
      this.rightTab.lightModeRight();
      document.getElementById("main-tab").style.backgroundColor = "#3248F4";
    }
   
  }
  
  language(){
  }



}
