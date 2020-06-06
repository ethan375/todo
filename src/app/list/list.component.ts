import { Component, OnInit } from '@angular/core';

import { ListsService } from '../lists.service'
import { List } from "../list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // template: `<app-task *ngFor="let task of list.task"
  // [tasks]=list.tasks></app-task>`
})
export class ListComponent implements OnInit {

  constructor(
    private listService: ListsService,
  ) { }

  ngOnInit(): void {
    this.getLists()
  }

  lists: List[] = [];

  getLists(): void{
    this.listService.getLists()
      .subscribe(lists => this.lists = lists) 
  }

}
