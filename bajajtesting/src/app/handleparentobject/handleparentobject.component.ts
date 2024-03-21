import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-handleparentobject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './handleparentobject.component.html',
  styleUrl: './handleparentobject.component.css',
})
export class HandleparentobjectComponent {
  @Input() childBooks: any;
}
