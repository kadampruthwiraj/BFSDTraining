import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonPerson } from '../app.component';

@Component({
  selector: 'app-classobjectforchild',
  standalone: true,
  imports: [],
  templateUrl: './classobjectforchild.component.html',
  styleUrl: './classobjectforchild.component.css',
})
export class ClassobjectforchildComponent {
  @Input()
  personFromParent: Person = new Person('Pruthwiraj 2', 'Body 2');

  objectOfCommonPersonInChild: CommonPerson = new CommonPerson('Pruthwiraj 3');

  @Output()
  notifyObjectFromChild = new EventEmitter();

  submit() {
    this.notifyObjectFromChild.emit(this.objectOfCommonPersonInChild);
  }
}

export class Person {
  fname: string = '';
  body: string = '';

  constructor(fname: string, body: string) {
    this.fname = fname;
    this.body = body;
  }

  toString(): string {
    console.log(
      'ClassobjectforchildComponent.Person.toString(){ ' +
        this.fname +
        ' ' +
        this.body +
        ' }'
    );
    return (
      'ClassobjectforchildComponent.Person.toString(){ ' +
      this.fname +
      ' ' +
      this.body
    );
  }
}
