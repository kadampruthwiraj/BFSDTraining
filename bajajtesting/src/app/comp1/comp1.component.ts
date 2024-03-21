import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component {
  name: string = 'Comp1Component';
  number1: string = '0';
  number2: string = '0';
  powerResult: number = 0;
  squareResult:number=0;
   count:number=0;
  
  toString(): string {
    return 'hello ' + `${this.name}`;
  }

  powerA(): string {
    alert(this.number1 + ' ' + this.number2);
    let sp = 1;
    for (let i = 1; i < Number(this.number2); i++) {
      sp = sp * Number(this.number1);
    }
    alert(sp);
    return '' + sp;
  }

  powerB(number1: string, number2: string): string {

    // console.log(('#number1').value); // undefined
    // console.log(document.getElementById('number1').value); // sampleName
    const no1=document.querySelector("number1")  as HTMLInputElement | null;
    console.log("test 1"+no1?.value);
    const cno1=document.getElementById("number1") as HTMLInputElement | null;
    console.log("test "+cno1?.value);
    // alert(number1 + ' ' + number2);
    let sp = 1;
    for (let i = 0; i < Number(number2); i++) {
      sp = sp * Number(number1);
    }
    this.powerResult = sp;
    // alert(sp);
    return '' + sp;
  }


  squareA(number1: string): string {
    
    let sp = 1;
    
      sp = Number(number1) * Number(number1);
    
    this.squareResult = sp;


    return '' + sp;
  }

  clickMe():number{
    this.count=this.count+1;
    return this.count ;
  }
}
