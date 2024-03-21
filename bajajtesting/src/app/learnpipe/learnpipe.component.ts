import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CustgenderPipe } from '../cust/custgender.pipe';
import { CustpipePipe } from '../cust/custpipe.pipe';

@Component({
  selector: 'app-learnpipe',
  standalone: true,
  imports: [CommonModule, CustpipePipe, CustgenderPipe, RouterOutlet],
  templateUrl: './learnpipe.component.html',
  styleUrl: './learnpipe.component.css',
})
export class LearnpipeComponent {
  fname: string = 'pruthwiraj';
  mname: string = 'Namdev';
  lname: string = 'kadam';
  today: Date = new Date();
  listOfPerson: PersonDetailsForCustpipe[] = new Array();
  static flag: boolean = true;

  ngOnInit(): void {
    console.log('call add()');
    // if (LearnpipeComponent.flag) {
    this.listOfPerson.push(new PersonDetailsForCustpipe('Pruthwiraj', 1, 29));
    this.listOfPerson.push(new PersonDetailsForCustpipe('Suraj', 1, 29));
    this.listOfPerson.push(new PersonDetailsForCustpipe('Rachana', 0, 29));
    this.listOfPerson.push(new PersonDetailsForCustpipe('Arvind', 1, 29));
    this.listOfPerson.push(new PersonDetailsForCustpipe('Jarina', 0, 29));
    this.listOfPerson.push(new PersonDetailsForCustpipe('Naynika', 0, 29));
    LearnpipeComponent.flag = false;
    // }
  }
}

class PersonDetailsForCustpipe {
  name: string = '';
  gender: number = 1;
  age: number = 0;

  constructor(name: string, gender: number, age: number) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
}
