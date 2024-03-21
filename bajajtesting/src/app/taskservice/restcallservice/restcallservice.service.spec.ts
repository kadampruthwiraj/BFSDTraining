import { TestBed } from '@angular/core/testing';

import {
  RestcallserviceService,
} from '../restcallservice/restcallservice.service';

describe('RestcallserviceService', () => {
  let service: RestcallserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestcallserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
