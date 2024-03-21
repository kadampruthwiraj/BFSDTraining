import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  Flight,
  FlightAndFlightData,
} from '../beans/Flight';
import { CustgenderPipe } from '../cust/custgender.pipe';
import { CustpipePipe } from '../cust/custpipe.pipe';
import {
  RestcallserviceService,
} from '../taskservice/restcallservice/restcallservice.service';

@Component({
  selector: 'app-restcallcomponent',
  standalone: true,
  imports: [CommonModule, CustpipePipe, CustgenderPipe, RouterOutlet],
  templateUrl: './restcallcomponent.component.html',
  styleUrl: './restcallcomponent.component.css',
})
export class RestcallcomponentComponent {
  flightcallservice: RestcallserviceService = inject(RestcallserviceService);

  flights: Flight[] = new Array();
  listOfFlightAndFlightData: FlightAndFlightData[] = new Array();
  ngOnInit() {
    this.flightcallservice.getFlights().subscribe((data: Flight[]) => {
      console.log(data);
      this.flights = data;
      console.log('read array');
      for (let i = 0; i < this.flights.length; i++) {
        console.log('main array ' + this.flights[i].id);
        console.log('main array ' + (this.flights[i].flight != null));

        if (this.flights[i].flight != null) {
          for (let j = 0; j < this.flights[i].flight.length; j++) {
            console.log('child array');
            this.listOfFlightAndFlightData.push(
              new FlightAndFlightData(
                this.flights[i].id,
                this.flights[i].departure_location,

                this.flights[i].arrival_location,
                this.flights[i].flight[j].flight_id,
                this.flights[i].flight[j].flight_number,
                this.flights[i].flight[j].departure_time,
                this.flights[i].flight[j].arrival_time
              )
            );
          }
        } else {
          this.listOfFlightAndFlightData.push(
            new FlightAndFlightData(
              this.flights[i].id,
              this.flights[i].departure_location,

              this.flights[i].arrival_location,
              0,
              0,
              '',
              ''
            )
          );
        }
      }
    });
  }
}
