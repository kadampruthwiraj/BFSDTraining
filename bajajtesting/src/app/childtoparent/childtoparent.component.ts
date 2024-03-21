import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  standalone: true,
  imports: [],
  templateUrl: './childtoparent.component.html',
  styleUrl: './childtoparent.component.css',
})
export class ChildtoparentComponent {
  @Output() dataEvent = new EventEmitter();

  sendData() {
    this.dataEvent.emit('Hello from child');
  }

  @Output() childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Hello from bajaj');
  }

  @Output() testEvent = new EventEmitter();

  fireTestEvent() {
    this.testEvent.emit('Hello from bajaj testing');
  }
}
