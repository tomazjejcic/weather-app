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
    private title = 'Weather App';
    private locationObject = {
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
        // const nudge = document.getElementById('nudge');

        // const showNudgeBanner = function() {
        //     nudge.style.display = 'block';
        // };

        // const hideNudgeBanner = function() {
        //     nudge.style.display = 'none';
        // };

        // const nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);


        const geoSuccess = function(position) {

            console.log(' geo POSITTION', position);
            startPos = position;
            locationAllowed();
            // hideNudgeBanner();
            // We have the location, don't display banner
            // clearTimeout(nudgeTimeoutId);

            // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
            // document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        };
        const geoError = function(error) {

            console.log('geoError: ', error);
            switch (error.code) {
            case error.TIMEOUT:
                // The user didn't accept the callout
                // showNudgeBanner();
                break;
            }
        };

        const locationAllowed = (() => {

            const allowed = {
                lat: startPos.coords.latitude,
                lng: startPos.coords.longitude,
                zoom: 2
            }
            this.locationObject = allowed
        })

        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }

    // TODO: future search location
    // showModal() {
    //   this.locationModal.show()
    // }
}
