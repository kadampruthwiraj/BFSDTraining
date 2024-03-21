import { Component } from '@angular/core';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  firstNumber: string = '';
  secondNumber: string = '';
  message: any;
  sendToChild: string = '';
  totalPrimeNumber: any;

  getResponse(data: string) {
    this.message = data;
  }
  submit(firstNumber: string, secondNumber: string) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }
}
