import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { WeatherComponent } from './weather.component';
import { LocationModalComponent } from './location-modal/location-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    LocationModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCB1wszn_GgcWqN7-CdjFMGubnf1GWwtew'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
