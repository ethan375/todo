import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  private newTaskRoute = 'http://localhost:3011/tasks/new'

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`some shit went wrong`)
      console.error(error)

      // send the user a message that something went wrong
      return of(result as T)
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),
  }

  createNewTask(task: object): Observable<Task> {
    return this.http.post<Task>(this.newTaskRoute, task, this.httpOptions).pipe(
      tap((newTask: Task) => console.log(`this is the new task ${newTask}`)),
      catchError(this.handleError<Task>('createTask'))
    )
  }
}
