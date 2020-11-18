import { Component, OnInit } from '@angular/core';

import { ListsService } from '../../lists.service'
import { List } from "../../List"

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private listService: ListsService
  ) { }

  ngOnInit(): void {
    this.getLists()
  }

  lists: List[] = []

  getLists(): void {
    this.listService.getLists()
      .subscribe(lists => this.lists = lists)
  }

}
