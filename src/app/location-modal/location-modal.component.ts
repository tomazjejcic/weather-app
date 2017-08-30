import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-location-modal',
    templateUrl: './location-modal.component.html',
    styleUrls: ['./location-modal.component.css']
})
export class LocationModalComponent implements OnInit {

    public visible = false;
    public visibleAnimate = false;

    constructor(

    ) {

    }

    ngOnInit() {

    }

    public show(): void {
        console.log('Modal shown');
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }

    public hide(): void {
        console.log('Modal hidden');
        this.visible = false;
        setTimeout(() => this.visible = false, 300);
    }

}
