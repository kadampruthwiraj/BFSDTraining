import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Flight } from '../../beans/Flight';

@Injectable({
  providedIn: 'root',
})
export class RestcallserviceService {
  [x: string]: any;
  constructor(private httpclient: HttpClient) {}

  private baseurl = 'http://localhost:8504/Search/allFlights';

  getFlights(): Observable<Flight[]> {
    console.log('pruthwiraj ' + this.httpclient + ' ' + this.baseurl);
    return this.httpclient.get<Flight[]>(this.baseurl);
  }
}
