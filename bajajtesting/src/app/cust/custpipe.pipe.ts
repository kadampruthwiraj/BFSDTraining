import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe',
  standalone: true,
})
export class CustpipePipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value);
  }
}
