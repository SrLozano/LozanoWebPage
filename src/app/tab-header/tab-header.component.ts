import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent implements OnInit {

  //Inputs means that is a variable that comes from the parent
  @Input() public parentData;
  constructor() { }

  ngOnInit(): void {
  }

}
