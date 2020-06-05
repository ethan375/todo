import { Component, OnInit } from '@angular/core';

import { ListsService } from '../lists.service'
import { List } from "../list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private listService: ListsService,
  ) { }

  ngOnInit(): void {
    this.getLists()
  }

  getLists(): void{
    this.listService.getLists()
      .subscribe(lists => console.log(lists))
  }

}
