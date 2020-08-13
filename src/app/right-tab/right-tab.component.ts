import { element, by } from 'protractor';
import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals'; //Global variables
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {LeftTabComponent} from '../left-tab/left-tab.component'
import {TabHeaderComponent} from '../tab-header/tab-header.component'


@Component({
  selector: 'app-right-tab',
  templateUrl: './right-tab.component.html',
  providers: [LeftTabComponent, TabHeaderComponent],
  styleUrls: ['./right-tab.component.scss']
})
export class RightTabComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  name = myGlobals.name;
  job = myGlobals.job;
  description = myGlobals.description;
  about_description = myGlobals.about_description;
  
  //Binding variables
  public about = "Sobre mi"
  public education = "Educación"
  public skills = "Habilidades"
  public rewards = "Reconocimientos"
  public experience = "Experiencia"
  public contact = "Contacto"
  public main_skills = "Principales habilidades"

  //Varibles for the form
  public email:string;
  public name_email:string;
  public subject:string;
  public text:string;


  constructor(public dialog: MatDialog, public leftTab:LeftTabComponent, 
    public tabHeader:TabHeaderComponent) { }

  //Function to open the popup
  openDialog(variable: number) {
    const dialogRef = null;
    if(variable == 1){
      const dialogRef = this.dialog.open(DialogContentExampleDialog);
    } else if (variable == 2){
      const dialogRef = this.dialog.open(DialogContentExampleDialog2);
    } else{
      alert("Popup not found");
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Functions that implements the dark mode on this
  darkModeRight(){
    // Change text
    document.getElementById("container").style.color = "white";
    //Change inicio
    document.getElementById("inicio").style.backgroundColor = "#151C21";
    //Change sobre
    document.getElementById("sobre").style.backgroundColor = "#151C21";
    //Change educacion
    document.getElementById("educacion").style.backgroundColor = "#151C21";
    //Change habilidades1
    document.getElementById("habilidades1").style.backgroundColor = "#151C21";
    //Change habilidades
    document.getElementById("habilidades").style.backgroundColor = "#151C21";
    //Change reconocimientos
    document.getElementById("reconocimientos").style.backgroundColor = "#151C21";
    //Change experiencia
    document.getElementById("experiencia").style.backgroundColor = "#151C21";
    //Change contacto
    document.getElementById("contacto").style.backgroundColor = "#151C21";
    //Change left-tab
    this.leftTab.toDark();
    this.tabHeader.toDark();
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

@Component({
  selector: 'dialog-content-example-dialog-2',
  templateUrl: 'dialog-content-example-dialog-2.html',
})
export class DialogContentExampleDialog2 {}
