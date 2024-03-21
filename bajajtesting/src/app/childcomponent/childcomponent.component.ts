import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childcomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.css',
})
export class ChildcomponentComponent {
  @Input() item: number = 0;
  @Input() frutisFromParent: string[] = [];
  @Input() childCounter: number = 0;

  getItem() {
    console.log('ChildcomponentComponent' + this.item);
  }
}
