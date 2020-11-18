import { Component, OnInit, Input,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'

import { Task } from '../../Task'
import { TaskService } from '../../task.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  newTaskForm = new FormControl('');


  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
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
      .subscribe(() => this.router.navigateByUrl('/lists')) //this function needs to return the user to the overview component
  }
}
