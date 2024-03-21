import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { TaskServiceService } from '../../task-service.service';

@Component({
  selector: 'app-callservice2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './callservice2.component.html',
  styleUrl: './callservice2.component.css',
})
export class Callservice2Component {
  // constructor(public my: TaskServiceService) {}
  my: TaskServiceService = inject(TaskServiceService);

  list = this.my.getAllServiceItem();

  deleteItemFromService(i: number) {
    this.my.deleteServiceItem(i);
  }
}
