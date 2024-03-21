import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-twowaycommunication',
  standalone: true,
  imports: [],
  templateUrl: './twowaycommunication.component.html',
  styleUrl: './twowaycommunication.component.css',
})
export class TwowaycommunicationComponent {
  //***send data from parent to child
  @Input()
  childDataFromParent: string = '';

  //***send data from child to parent
  @Output() childDataForParent = new EventEmitter();

  sendDataFromChildToParent(data: string) {
    this.childDataForParent.emit('' + data);
  }
}
