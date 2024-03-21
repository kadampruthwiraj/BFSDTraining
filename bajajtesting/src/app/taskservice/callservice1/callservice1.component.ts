import { Component } from '@angular/core';

import { TaskServiceService } from '../../task-service.service';

@Component({
  selector: 'app-callservice1',
  standalone: true,
  imports: [],
  templateUrl: './callservice1.component.html',
  styleUrl: './callservice1.component.css',
})
export class Callservice1Component {
  // public _taskService: TaskServiceService = inject(TaskServiceService);
  // my: TaskServiceService=new TaskServiceService();

  constructor(public my: TaskServiceService) {}
  msg: string = this.my.welcome();
  serviceNumber: number = this.my.returnNmberFromService();

  addItemInServiceArray(item: string) {
    this.my.addServiceItem(item);
  }
}
