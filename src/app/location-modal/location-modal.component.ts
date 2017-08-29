import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-location-modal',
    templateUrl: './location-modal.component.html',
    styles: []
})
export class LocationModalComponent implements OnInit {

    // public visible = false;

    @ViewChild('modal1') modal: ModalComponent;

    constructor(

    ) {

    }

    ngOnInit() {

    }

    public show(): void {
        this.modal.show();
        console.log('Modal shown');
        // this.visible = true;
    }

    public hide(): void {
        this.modal.hide();
        console.log('Modal hidden');
        // this.visible = false;
    }

}
