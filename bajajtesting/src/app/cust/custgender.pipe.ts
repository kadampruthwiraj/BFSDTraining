import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custgender',
  standalone: true,
})
export class CustgenderPipe implements PipeTransform {
  transform(value: number): string {
    if (value == 0) {
      return 'Female';
    } else {
      return 'Male';
    }
  }
}
