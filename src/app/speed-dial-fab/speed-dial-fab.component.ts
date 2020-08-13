import { Component, Input, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';
import {LeftTabComponent} from '../left-tab/left-tab.component'

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  providers: [LeftTabComponent],
  animations: speedDialFabAnimations
})
export class SpeedDialFabComponent implements OnInit {

  @Input() 
  public options;

  public buttons = [];

  public fabTogglerState = 'inactive';

  constructor(public leftTab:LeftTabComponent) { }

  public ngOnInit() {
    const maxButtons = 7;
    if (this.options.buttons.length > maxButtons) {
      this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
    }
  }

  public open(){
    this.leftTab.openNav();
  }

  public showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.options.buttons;
  }

  public hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  public toggle() {
    this.buttons.length 
      ? this.hideItems() 
      : this.showItems();
  }
}
