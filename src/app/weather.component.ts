import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {

    // @Input //Bindings
    @Input() location: any;

    // Variables
    private results
    private lat;
    private lng;

    private weatherData;

    constructor(
        private http: HttpClient
    ) {

    }

    ngOnChanges(changes: SimpleChanges) {

        if (this.location) {

            console.log('NEW WEATHER RESULTS', this.location);
            this.lat = this.location.lat;
            this.lng = this.location.lng;

            this.callApi(this.lat, this.lng);
        }
    }

    callApi(lat, lng) {

        this.http.get(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`)
            .subscribe(
                data => {
                    const apiSuccess = data;
                    console.log('HTTP RESULTS: ', apiSuccess);
                    this.weatherData = apiSuccess;
                },
                err => {
                    console.log('Something went wrong!', err);
                }
            );
    }
}
