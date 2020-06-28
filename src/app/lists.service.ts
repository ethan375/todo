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

  private todoApi = 'http://localhost:3011/home'

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      // when a message system is implemented send the user a message that there has been an error

      return of(result as T)
    }
  }

  getLists(): Observable<List[]>{
    return this.http.get<List[]>(this.todoApi)
      .pipe(
        tap(_ => console.log(`fetched lists`)),
        catchError(this.handleError<List[]>(`getLists`, []))
      )
  }

  createList(list: object): Observable<List>{
    return this.http.post<List>(this.todoApi, list, this.httpOptions).pipe(
      tap((newList: List) => console.log(`this is the new list ${newList}`)),
      catchError(this.handleError<List>('createList'))
    )
  }

}