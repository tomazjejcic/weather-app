import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
// import { ModalService } from '../_services/index';

@Component({
  selector: 'app-map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges {

    // @Input //Bindings
    @Input() userLocation: any;

    // @Output
    @Output() changeMarkerLocation = new EventEmitter();

    // Variables
    private title = 'map selector';
    private lat = null;
    private lng = null;
    private zoom = 2;

    constructor(

    ) {

    }

    ngOnChanges(changes: SimpleChanges) {

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

        const newLocation = {
            lat: this.lat,
            lng: this.lng,
            zoom: 8
        }

        this.changeMarkerLocation.emit(newLocation);
    }
}
