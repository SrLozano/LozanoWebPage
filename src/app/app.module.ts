import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftTabComponent } from './left-tab/left-tab.component';
import { RightTabComponent } from './right-tab/right-tab.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'; 
import { TabHeaderComponent } from './tab-header/tab-header.component';
import { TimelineComponent } from './timeline/timeline.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LeftTabComponent,
    RightTabComponent,
    TabHeaderComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
