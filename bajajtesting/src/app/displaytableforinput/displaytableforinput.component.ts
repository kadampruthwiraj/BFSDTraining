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
  selector: 'app-displaytableforinput',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './displaytableforinput.component.html',
  styleUrl: './displaytableforinput.component.css',
})
export class DisplaytableforinputComponent {
  employeeForm = new FormGroup({
    fname: new FormControl(),
    gender: new FormControl(),
  });
  femaleCount: number = 0;
  maleCount: number = 0;

  listOfEmployee = Array();

  submit() {
    console.log(
      'this is working ' +
        this.employeeForm.value.fname +
        ' ' +
        this.employeeForm.value.gender
    );

    if (this.employeeForm.value.gender == 0) {
      this.femaleCount = this.femaleCount + 1;
    } else {
      this.maleCount = this.maleCount + 1;
    }

    this.listOfEmployee.push(
      new EmployeeForm(
        this.employeeForm.value.fname,
        this.employeeForm.value.gender
      )
    );
  }
}

class EmployeeForm {
  name: string = '';
  gender: number = 1;
  genderInString: string = '';

  constructor(name: string, gender: number) {
    this.name = name;
    this.gender = gender;

    if (this.gender == 0) {
      this.genderInString = 'FEMALE';
      // femaleCount = femaleCount + 1;
    } else {
      this.genderInString = 'MALE';
      // maleCount = maleCount + 1;
    }
  }
}
