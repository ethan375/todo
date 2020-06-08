import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task'

import { TaskService } from '../task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  
  @Input() task: Task;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  toggleCompleted(): void{
    // const id = this.task['_id'];
    this.taskService.toggleCompleted(this.task)
  }
  
}
