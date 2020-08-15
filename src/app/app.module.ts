import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftTabComponent } from './left-tab/left-tab.component';
import { RightTabComponent } from './right-tab/right-tab.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TimelineComponent } from './timeline/timeline.component'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftTabComponent,
    RightTabComponent,
    TabHeaderComponent,
    TimelineComponent,
    SpeedDialFabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [TabHeaderComponent, RightTabComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
