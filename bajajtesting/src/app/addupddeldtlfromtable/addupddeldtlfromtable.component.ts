import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-addupddeldtlfromtable',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './addupddeldtlfromtable.component.html',
  styleUrl: './addupddeldtlfromtable.component.css',
})
export class AddupddeldtlfromtableComponent {
  static update = -1;
  employeeDetailForm = new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),

    country: new FormControl(),

    langng: new FormControl(),
    langjava: new FormControl(),
  });

  listOfEmployee = new Array();

  ngOnInit() {
    this.employeeDetailForm.controls['name'].setValue('Kadam');
    this.employeeDetailForm.controls['gender'].setValue('Kadam');
    this.employeeDetailForm.controls['country'].setValue('Kadam');
    this.employeeDetailForm.controls['langng'].setValue('Kadam');
    this.employeeDetailForm.controls['langjava'].setValue('Kadam');
  }

  onSubmit() {
    console.log(this.employeeDetailForm.value.name);

    if (AddupddeldtlfromtableComponent.update > -1) {
      // var flag = this.listOfEmployee.filter((obj) => {
      //   obj.id === AddupddeldtlfromtableComponent.update;
      // });

      let emp1 = new Employee(
        AddupddeldtlfromtableComponent.update,
        this.employeeDetailForm.value.name,
        this.employeeDetailForm.value.gender,
        this.employeeDetailForm.value.country,
        this.employeeDetailForm.value.langng,
        this.employeeDetailForm.value.langjava
      );
      this.listOfEmployee[AddupddeldtlfromtableComponent.update] = emp1;
    } else {
      this.listOfEmployee.push(
        new Employee(
          this.listOfEmployee.length,
          this.employeeDetailForm.value.name,
          this.employeeDetailForm.value.gender,
          this.employeeDetailForm.value.country,
          this.employeeDetailForm.value.langng,
          this.employeeDetailForm.value.langjava
        )
      );
    }

    AddupddeldtlfromtableComponent.update = -1;
  }

  delete(i: number) {
    this.listOfEmployee.splice(i, 1);
    AddupddeldtlfromtableComponent.update = -1;
  }
  update(i: number) {
    AddupddeldtlfromtableComponent.update = i;
    alert(i);
    const emp = this.listOfEmployee[i];
    alert(emp.toString());

    this.employeeDetailForm.controls['name'].setValue(emp.name);
    this.employeeDetailForm.controls['gender'].setValue(emp.gender);
    this.employeeDetailForm.controls['country'].setValue(emp.country);
    this.employeeDetailForm.controls['langng'].setValue(emp.langng);
    this.employeeDetailForm.controls['langjava'].setValue(emp.langjava);
  }
}

class Employee {
  id: number = 0;
  name: string = '';
  gender: string = '';

  country: string = '';

  langng: string = '';
  langjava: string = '';

  constructor(
    id: number,
    name: string,
    gender: string,

    country: string,

    langng: string,
    langjava: string
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.country = country;
    this.langng = langng;
    this.langjava = langjava;
  }

  toString(): string {
    return (
      this.name +
      ' ' +
      this.gender +
      ' ' +
      this.country +
      ' ' +
      this.langng +
      ' ' +
      this.langjava +
      ' '
    );
  }
}
