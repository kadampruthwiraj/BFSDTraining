export class Flight {
  id: number = 0;
  departure_location: string = '';
  arrival_location: string = '';
  flight: FlightData[] = new Array();
}

export class FlightData {
  flight_id: number = 0;
  flight_number: number = 0;
  departure_time: string = '';
  arrival_time: string = '';
}

export class FlightAndFlightData {
  id: number = 0;
  departure_location: string = '';
  arrival_location: string = '';
  flight_id: number = 0;
  flight_number: number = 0;
  departure_time: string = '';
  arrival_time: string = '';

  constructor(
    id: number,
    departure_location: string,
    arrival_location: string,
    flight_id: number,
    flight_number: number,
    departure_time: string,
    arrival_time: string
  ) {
    this.id = id;
    id;
    this.departure_location = departure_location;
    this.arrival_location = arrival_location;
    this.flight_id = flight_id;
    this.flight_number = flight_number;
    this.departure_time = departure_time;
    this.arrival_time = arrival_time;
  }
}
