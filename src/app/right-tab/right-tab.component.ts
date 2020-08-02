import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals'; //Global variables
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-right-tab',
  templateUrl: './right-tab.component.html',
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


  constructor(public dialog: MatDialog) { }

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
