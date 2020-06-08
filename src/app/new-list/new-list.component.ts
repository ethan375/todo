import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormControl } from '@angular/forms'

import { ListsService } from '../lists.service'
import { List } from '../List'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  newList = new FormControl('');

  constructor(
    private listService: ListsService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  createNewList(): void{
    const newList = {title: this.newList.value}

    this.listService.createList( newList )
      .subscribe((newList) => console.log(newList))
  }


  // goBack(): void{
  //   this.location.go('http://localhost:4200/lists')
  //   console.log(`this is the go back function... is it working???`)
  // }

}
