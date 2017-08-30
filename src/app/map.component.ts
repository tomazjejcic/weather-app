import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { ModalService } from '../_services/index';

@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {

    // @Input //Bindings
    @Input() userLocation: any;

    // Variables
    private title = 'map selector';
    private lat = null;
    private lng = null;
    private zoom = 2;

    constructor(

    ) {

    }

    ngOnChanges(changes: SimpleChanges) {

        console.log('User Allows Location', this.userLocation);
        if (this.userLocation) {
            this.lat = this.userLocation.lat;
            this.lng = this.userLocation.lng;
            this.zoom = this.userLocation.zoom;
        }

    }

    mapClicked(event) {

        console.log('\n Marker Location Changed', this.userLocation);
        console.log('lat', event.coords.lat);
        console.log('lng', event.coords.lng);
        this.lat = event.coords.lat;
        this.lng = event.coords.lng
    }
}
