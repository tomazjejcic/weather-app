import { Component } from '@angular/core';
// import { ModalService } from '../_services/index';

// just an interface for type safety.
// interface Marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
// 	draggable: boolean;
// }

@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
    title = 'map selector';
    lat = 51.678418;
    lng = 7.809007;

    // lat1: number = 51.678418;
    // lng1: number = 7.809007;

    // zoom: number = 8;

    // markers: marker[] = [

    // ]
    constructor(

    ) {
        this.getLocation();
    }

    getLocation() {
        console.log('WHAT RUNNING', navigator.geolocation.getCurrentPosition);
        // navigator.geolocation.getCurrentPosition(success, error);

        let startPos;
        const nudge = document.getElementById('nudge');

        const showNudgeBanner = function() {
            nudge.style.display = 'block';
        };

        const hideNudgeBanner = function() {
            nudge.style.display = 'none';
        };

        const nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);


        const geoSuccess = function(position) {
            console.log('POSITTION', position);
            hideNudgeBanner();
            // We have the location, don't display banner
            clearTimeout(nudgeTimeoutId);

            // Do magic with location
            startPos = position;
            document.getElementById('startLat').innerHTML = startPos.coords.latitude;
            document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        };
        const geoError = function(error) {
            console.log('geoError: ', error);
            switch (error.code) {
            case error.TIMEOUT:
                // The user didn't accept the callout
                showNudgeBanner();
                break;
            }
        };

        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }

    mapClicked(event) {
        // console.log('LLLL', event);
        console.log('lat', event.coords.lat);
        console.log('lng', event.coords.lng);
        this.lat = event.coords.lat;
        this.lng = event.coords.lng
    }
}
