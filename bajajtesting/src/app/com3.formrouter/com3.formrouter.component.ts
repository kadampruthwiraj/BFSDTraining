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
  selector: 'app-com3-formrouter',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './com3.formrouter.component.html',
  styleUrl: './com3.formrouter.component.css',
})
export class Com3FormrouterComponent {
  contanctForm = new FormGroup({
    cname: new FormControl(),
    gender: new FormControl(),

    country: new FormControl(),

    langng: new FormControl(),
    langjava: new FormControl(),
  });

  onSubmit() {
    console.log(this.contanctForm.value);
    console.log(this.contanctForm.value.cname);
  }
}
