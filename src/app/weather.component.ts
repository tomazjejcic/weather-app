import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {

    // @Input //Bindings
    @Input() location: any;
    @Input() farenheit: boolean;

    @Output() locationName = new EventEmitter();

    // Variables
    lat;
    lng;
    weatherDescription;
    temperatureCelsius;
    temperatureFarenheit;
    weatherIcon;

    constructor(
        private http: HttpClient
    ) {

    }

    ngOnChanges(changes: SimpleChanges) {

        if (this.location && changes.location) {

            console.log('NEW WEATHER RESULTS', this.location);
            this.lat = this.location.lat;
            this.lng = this.location.lng;

            this.callApi(this.lat, this.lng);
        }
    }

    callApi(lat, lng) {

        this.http.get(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`)
            .subscribe(
                resp => {
                    if (!resp['error']) {
                        const apiSuccess = resp;
                        this.resolveApiSuccess(apiSuccess)
                    }
                },
                err => {
                    console.log('Something went wrong!', err);
                }
            );
    }

    resolveApiSuccess(data) {
        if (data) {
            this.locationName.emit(data.name);
            this.weatherDescription = data.weather[0].main
            this.temperatureCelsius = Math.round(data.main.temp);
            this.temperatureFarenheit = this.fromCelsiusToFarenheit(this.temperatureCelsius);
            this.weatherIcon = data.weather[0].icon
        }
    }

    fromCelsiusToFarenheit(celsius) {

        return celsius * 1.8 + 32;
    }
}
