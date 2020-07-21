import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../globals'; //Global variables
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-right-tab',
  templateUrl: './right-tab.component.html',
  styleUrls: ['./right-tab.component.scss']
})
export class RightTabComponent implements OnInit {

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
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

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
