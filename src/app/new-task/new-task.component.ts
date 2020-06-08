import { Component, OnInit, Input,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms'

import { Task } from '../Task'
import { TaskService } from '../task.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  newTaskForm = new FormControl('');


  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }



  createNewTask(): void{
    const id = this.route.snapshot.paramMap.get('id')
    const task = {
      name: this.newTaskForm.value,
      list: id
    }
    this.taskService.createNewTask(task)
  }
}
