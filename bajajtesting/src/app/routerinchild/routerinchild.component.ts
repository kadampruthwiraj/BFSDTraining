import { Component } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-routerinchild',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './routerinchild.component.html',
  styleUrl: './routerinchild.component.css',
})
export class RouterinchildComponent {}
