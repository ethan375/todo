import { Component, OnInit, Input } from '@angular/core';

import { ListsService } from '../lists.service'
import { List } from "../List";

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
  }

  @Input() list: List

}
