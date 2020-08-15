import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent implements OnInit {

  public header = document.getElementsByClassName("header") as HTMLCollectionOf<HTMLElement>;

  //Inputs means that is a variable that comes from the parent
  @Input() public parentData;
  constructor() { }

  ngOnInit(): void {
  }

  toDark(){
    for(var i=0, len=this.header.length; i<len; i++)
    { 
        this.header[i].style.color = "#FFFFFF";
    }
  }

  toLight(){
    for(var i=0, len=this.header.length; i<len; i++)
    { 
        this.header[i].style.color = "black";
    }
  }

}
