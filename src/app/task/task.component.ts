import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task'

import { TaskService } from '../task.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  
  @Input() task: Task;
  // public task = null

  constructor(
    private taskService: TaskService   
  ) { }

  ngOnInit(): void {
  }

  toggleCompleted(): void{
    this.taskService.toggleCompleted( this.task )
      .subscribe( alteredTask => console.log(alteredTask) )
  }
  
  deleteTask(): void {
    this.taskService.deleteTask( this.task["_id"] )
      .subscribe( deletedTask => window.location.reload() )
  }
}
