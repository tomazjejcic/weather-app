import { Component, ViewChild } from '@angular/core';
import { LocationModalComponent } from './location-modal/location-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';

  @ViewChild('locationModal') locationModal: LocationModalComponent;

  constructor(

  ) {

  }

  showModal() {
    this.locationModal.show()
  }
}
