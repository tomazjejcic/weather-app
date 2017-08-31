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
    lat = null;
    lng = null;
    zoom = 2;

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
