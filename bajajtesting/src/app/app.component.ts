import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
} from '@angular/router';

import {
  AddupddeldtlfromtableComponent,
} from './addupddeldtlfromtable/addupddeldtlfromtable.component';
import { ChildComponent } from './child/child.component';
import {
  ChildcomponentComponent,
} from './childcomponent/childcomponent.component';
import {
  ChildtoparentComponent,
} from './childtoparent/childtoparent.component';
import {
  ClassobjectforchildComponent,
  Person,
} from './classobjectforchild/classobjectforchild.component';
import {
  Com3FormrouterComponent,
} from './com3.formrouter/com3.formrouter.component';
import { Comp1Component } from './comp1/comp1.component';
import {
  Comp2FormtesingComponent,
} from './comp2.formtesing/comp2.formtesing.component';
import {
  DisplaytableforinputComponent,
} from './displaytableforinput/displaytableforinput.component';
import {
  FormvalidationsComponent,
} from './formvalidations/formvalidations.component';
import { FortestingComponent } from './fortesting/fortesting.component';
import {
  HandleparentobjectComponent,
} from './handleparentobject/handleparentobject.component';
import { LearnpipeComponent } from './learnpipe/learnpipe.component';
import { ParentComponent } from './parent/parent.component';
import {
  RestcallcomponentComponent,
} from './restcallcomponent/restcallcomponent.component';
import {
  RouterinchildComponent,
} from './routerinchild/routerinchild.component';
import {
  Callservice1Component,
} from './taskservice/callservice1/callservice1.component';
import {
  Callservice2Component,
} from './taskservice/callservice2/callservice2.component';
import {
  TwowaycommunicationComponent,
} from './twowaycommunication/twowaycommunication.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Comp1Component,
    FortestingComponent,
    Comp2FormtesingComponent,
    Com3FormrouterComponent,
    ChildcomponentComponent,
    HandleparentobjectComponent,
    ChildtoparentComponent,
    TwowaycommunicationComponent,
    ParentComponent,
    ChildComponent,
    FormvalidationsComponent,
    ClassobjectforchildComponent,
    LearnpipeComponent,
    RouterOutlet,
    RouterModule,
    RouterinchildComponent,
    Callservice1Component,
    Callservice2Component,
    DisplaytableforinputComponent,
    RestcallcomponentComponent,
    AddupddeldtlfromtableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bajajtesting';
  name: string = 'Pruthwiraj';
  data = 100;
  fruits: string[] = ['Apple', 'Orange', 'Banana'];
  counter: number = 0;

  books = [{ title: 'AAA' }, { title: 'BBB' }, { title: 'CCC' }];

  toString(): string {
    return 'Default welcome ' + `${this.name}`;
  }

  getName() {
    alert('hello alert');
  }

  getName1(name: string) {
    alert('hello alert ' + name);
  }

  hello() {
    console.log('hello');
  }

  getAddition(a: number, b: number) {
    alert(a + b);
  }

  changeComponent() {
    // this.router.navigate(['/Comp1Component'])  ;
    // this.router.navigateByUrl('/login');
    // this.router.navigate('/login');
  }

  getData() {
    console.log('AppComponent' + this.data);
  }

  incrementCounter() {
    this.counter = this.counter + 1;
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter = this.counter - 1;
    }
  }

  received: string = '';
  receivedMessage: string = '';
  receivedTestEvent: string = '';

  receivedData(rec: string) {
    this.received = rec;
  }

  //***send data from parent to child
  parentMeesageForChild: string = '';

  sendDataFromParentToChild(data: string) {
    this.parentMeesageForChild = data;
  }

  //***send data from child to parent
  parentMeesageFormChild: string = '';

  //class for child
  personObjectInParent1: Person = new Person('Pruthwiraj', 'Body1');

  //handle object from child
  obj2: any;

  handleChildObject(obj1: CommonPerson) {
    obj1.toString();
    this.obj2 = obj1;
  }

  ///object array
  employeeArray: Employee[] = [];
}

export class CommonPerson {
  fname: string = '';

  constructor(fname: string) {
    this.fname = fname + ' default name in parent';
  }
  setFname(fname: string) {
    this.fname = fname;
  }

  getFname(): string {
    return this.fname;
  }

  toString(): string {
    console.log(
      'AppComponent.CommonPerson.toString CommonPerson { ' + this.fname + ' }'
    );
    return (
      'AppComponent.CommonPerson.toString CommonPerson { ' + this.fname + ' }'
    );
  }
}

export class Employee {
  fname: string = '';
  company: string = '';

  toString(): string {
    console.log('Employee ' + this.fname + ' ' + this.company);
    return 'Employee ' + this.fname + ' ' + this.company;
  }
}
