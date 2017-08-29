import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { LocationModalComponent } from './location-modal/location-modal.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LocationModalComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCB1wszn_GgcWqN7-CdjFMGubnf1GWwtew'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
