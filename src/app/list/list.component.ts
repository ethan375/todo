import { Component, OnInit, Input } from '@angular/core';

import { ListsService } from '../lists.service';
import { TaskService } from '../task.service';
import { List } from "../List";
import { Task } from "../Task"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(
    private listService: ListsService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getId();
    this.getAllTasks();
  }

  //component variables

  @Input() list: List

  collapsed: boolean = true

  listId: string = '';

  tasks: Task[] = []

  //functions

  getAllTasks(): void {
    this.taskService.getBulkTasks(this.list.tasks)
      .subscribe(tasks => {this.sortTasks(tasks)})

    
  }

 getId(): void {
   this.listId = this.list['_id']
 }

 deleteList(): void {
   this.listService.deleteList(this.listId)
    .subscribe(deletedList => window.location.reload())
 }

 toggleTasks(): void {
   this.collapsed = !this.collapsed
 }

 sortTasks(tasks): void {

   for ( let i = 0; i < tasks.length; i++) {
     if ( tasks[i].completed == true ) {
       this.tasks.push(tasks[i])
     } else {
       this.tasks.unshift(tasks[i])
      }
    }
  }

}
