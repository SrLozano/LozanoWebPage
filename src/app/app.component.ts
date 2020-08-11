import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LozanoWebPage';
  FabOptions = {
    buttons: [
      {
        icon: 'home'
      },
      {
        icon: 'person'
      },
      {
        icon: 'school'
      },
      {
        icon: 'desktop_mac'
      },
      {
        icon: 'emoji_events'
      },
      {
        icon: 'business_center'
      },
      {
        icon: 'contact_phone'
      }
    ]
  };
}
