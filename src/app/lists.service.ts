import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { List } from './list'

@Injectable({
  providedIn: 'root'
})

export class ListsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  }

  private todoApi = 'localhost:3011/home'

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
        catchError(this.handleError<List>(`getLists`, []))
      )
  }


}