import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-comp2-formtesing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp2.formtesing.component.html',
  styleUrl: './comp2.formtesing.component.css',
})
export class Comp2FormtesingComponent {
  userdata: any = {};
  getData(data: NgForm) {
    console.log(data);
    this.userdata = data;
  }

  displayX: string = '';
  getFunction(data: string) {
    this.displayX = data;
    console.log(data);
  }
  displayY: string = '';
  displayXFunction(data: string) {
    this.displayY = data;
  }

  itemsfor: string[] = []; // ['Apple', 'Orange', 'Banana'];
  addItemIntoList(data: string) {
    this.itemsfor.push(data);
  }

  removeItemFromHtmlList(index: number) {
    alert(index);
    this.itemsfor.splice(index, 1);
    console.log(this.itemsfor);
  }

  hotelBill: any[] = [];
  getBillingData(quantityData: string, rate: string) {
    let add = Number(quantityData) * Number(rate);
    var bill = {
      Quantity1: quantityData,
      Rate1: rate,
      Amount1: add,
    };

    this.hotelBill.push(bill);
  }
}
