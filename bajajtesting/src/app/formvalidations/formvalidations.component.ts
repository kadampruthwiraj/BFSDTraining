import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-formvalidations',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './formvalidations.component.html',
  styleUrl: './formvalidations.component.css',
})
export class FormvalidationsComponent {
  formvalues: string = '';
  successMessage: string = '';

  form = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required]),
  });

  get f() {
    // alert(this.form.controls);
    // console.log(
    //   'fname ' + this.form.controls.fname.invalid + ' ' + this.form.invalid
    // );
    // console.log(
    //   'email ' + this.form.controls.email.invalid + ' ' + this.form.invalid
    // );
    // console.log(
    //   'body ' + this.form.controls.body.invalid + ' ' + this.form.invalid
    // );
    this.formvalues =
      this.form.value.fname +
      ' ' +
      this.form.value.email +
      ' ' +
      this.form.value.body;
    return this.form.controls;
  }
  submit() {
    this.successMessage = 'this is working';
    console.log(this.form.value);
  }
}
