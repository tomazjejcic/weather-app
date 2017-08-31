import { Component, ViewChild } from '@angular/core';
import { LocationModalComponent } from './location-modal/location-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @ViewChild('locationModal') locationModal: LocationModalComponent;

    // Variables
    locationName;
    userLocation;
    getFarenheit = false;
    locationObject = {
        lat: null,
        lng: null,
        zoom: 2
    }

    constructor(

    ) {

        this.confirmLocationSupport();
    }

    confirmLocationSupport() {

        if (navigator.geolocation) {
            // geolocation is supported
            this.getLocation();
        } else {
            // geolocation is not supported for this browser
            console.log('geolocation is not supported')
        }
    }

    getLocation() {

        let startPos;

        const geoSuccess = function(position) {

            console.log(' geo POSITTION', position);
            startPos = position;
            defineUserLocation();
        };

        const geoError = function(error) {

            console.log('geoError: ', error);
            switch (error.code) {
            case error.TIMEOUT:
                // The user didn't accept the callout
                break;
            }
        };

        const defineUserLocation = (() => {

            const definedUserLocation = {
                lat: startPos.coords.latitude,
                lng: startPos.coords.longitude,
                zoom: 8
            }
            this.userLocation = definedUserLocation
            this.locationObject = definedUserLocation
        })

        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }

    changeMarkerLocation(event) {

        const newMarkerLocation = {
          lat: event.lat,
          lng: event.lng,
          zoom: event.zoom
        }
        this.locationObject = newMarkerLocation;
    }

    getLocationName(event) {

        this.locationName = event;
    }

    setUserLocation() {
        this.locationObject = this.userLocation;
    }

    switchTemperatureScale() {
        this.getFarenheit ? this.getFarenheit = false : this.getFarenheit = true;
    }

    // TODO: future search location
    // showModal() {
    //   this.locationModal.show()
    // }
}
