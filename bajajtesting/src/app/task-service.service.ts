import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {}

  public welcome(): string {
    return 'Welcome to Service ';
  }

  public returnNmberFromService(): number {
    return 3;
  }

  listOfService = new Array();

  public addServiceItem(item: string) {
    this.listOfService.push(item);
  }

  public getAllServiceItem(): Array<String> {
    return this.listOfService;
  }
  public deleteServiceItem(i: number): Array<String> {
    return this.listOfService.splice(i, 1);
  }
}
