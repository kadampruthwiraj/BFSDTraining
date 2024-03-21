import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() cfirstNumber: string = '';
  @Input() csecondNumber: string = '';

  @Output() getResponse = new EventEmitter();

  onClick() {
    this.getResponse.emit('Message from child');
  }

  cArr: Array<number> = new Array();

  @Output()
  totalNumberEmitter = new EventEmitter();
  totalNumber: number = 0;

  createArray() {
    this.totalNumber = 0;
    let length = Number(this.csecondNumber) - Number(this.csecondNumber);
    if (length >= 0) {
      this.cArr = new Array();
    } else {
      this.cArr = new Array();
    }
    for (
      let i: number = Number(this.cfirstNumber);
      i <= Number(this.csecondNumber);
      i++
    ) {
      let prime = true;
      for (let j: number = 2; j <= i / 2; j++) {
        if (i % j == 0) {
          prime = false;
        }
      }
      if (prime) {
        this.totalNumber = this.totalNumber + 1;
        this.cArr.push(i);
      }
    }

    this.totalNumberEmitter.emit(this.totalNumber);

    console.log('cArr ' + this.cArr);
  }
}
