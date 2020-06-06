import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

import { ListsService } from '../lists.service'
import { List } from '../List'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(
    private listService: ListsService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  newList: object = {}

  createNewList(listTitle: string): void{
    listTitle = listTitle.trim();
    this.newList = {title: listTitle}
    this.listService.createList( this.newList )
      .subscribe(() => this.goBack())
  }


  goBack(): void{
    this.location.go('http://localhost:4200/lists')
    console.log(`this is the go back function... is it working???`)
  }

}
