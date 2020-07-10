import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftTabComponent } from './left-tab/left-tab.component';
import { RightTabComponent } from './right-tab/right-tab.component';
import {MatButtonModule} from '@angular/material/button';
import { TabHeaderComponent } from './tab-header/tab-header.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LeftTabComponent,
    RightTabComponent,
    TabHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
