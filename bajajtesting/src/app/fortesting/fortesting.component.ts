import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-fortesting',
  standalone: true,
  imports: [CommonModule,FormsModule,Comp1Component],
  templateUrl: './fortesting.component.html',
  styleUrl: './fortesting.component.css',
})
export class FortestingComponent {
  name: string="";
  number4:string="";
  type:number=1;
  username='';
  show:boolean=false;
  users=[
    {id:1,name:"Pruthwi"},
  {id:1,name:"PruthwiRaj"},
  {id:1,name:"Raj"}
];

toStringA(){
  Comp1Component.toString();
}

}
