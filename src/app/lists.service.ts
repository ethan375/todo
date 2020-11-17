import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { List } from './List'
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})

export class ListsService {

  constructor(
    private http: HttpClient,
    private taskService: TaskService,
    ) { }

  httpOptions = {
    headers: new HttpHeaders({ 
      'content-type': 'application/json',
    }),
  }

  private todoApi = 'https://ethans-todo-api.herokuapp.com/'

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      // when a message system is implemented send the user a message that there has been an error

      return of(result as T)
    }
  }

  getLists(): Observable<List[]>{ 
    const route = this.todoApi + `lists`

    return this.http.get<List[]>(route)
      .pipe(
        tap( list => console.log(`fetched list: ${list}`)),
        catchError(this.handleError<List[]>(`an error has done occured`, []))
      )
  }

  createList(list: object): Observable<List>{
    const route = this.todoApi + `lists`

    return this.http.post<List>(route, list, this.httpOptions).pipe(
      tap((newList: List) => console.log(`this is the new list ${newList}`)),
      catchError(this.handleError<List>('createList'))
    )
  }


  deleteList(list: String): Observable<any>{
    const route = this.todoApi + `lists/delete/${list}`

    return this.http.delete(route).pipe(
      tap( deletedList => console.log(`this is the list that has been deleted! ${deletedList}`)),
      catchError(this.handleError<List>('deleteList'))
    )
  }

  deleteCompleted( completedTasks: String[] ) {
    let route = this.todoApi + `tasks/delete/delete-completed?`

    for ( let i = 0; i < completedTasks.length; i++ ) {
      route += completedTasks[i] + `?`
    }

    return this.http.delete(route, this.httpOptions).pipe(
      tap((deletedLists => console.log(deletedLists)),
      catchError(this.handleError<List>('deletedLists')))
    )
  }

}