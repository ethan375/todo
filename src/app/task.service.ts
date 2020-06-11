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

  private baseTaskRoute = 'http://localhost:3011/tasks'

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
    const route = this.baseTaskRoute + "/new"
    return this.http.post<Task>(route, task, this.httpOptions).pipe(
      tap((newTask: Task) => console.log(`this is the new task ${newTask}`)),
      catchError(this.handleError<Task>('createNewTask'))
    )
  }

  toggleCompleted(task: Task): Observable<Task> {
    const route = this.baseTaskRoute + `/toggle-completed/${task['_id']}`
    console.log(route)
    //eventually in tap we need to send the user a message
    return this.http.patch<Task>(route, task, this.httpOptions).pipe(
      tap((updatedTask) => console.log(`this is the updated task ${updatedTask}`)),
      catchError(this.handleError<Task>('toggleCompleted'))
    )
  }

  // deleteTask(task: string): Observable<Task> {
  //   const route = this.baseTaskRoute + "/new"
  //   return this.http.delete<Task>(route, task).pipe(
  //     tap((deletedTask: Task) => console.log(`the task has been deleted`)),
  //     catchError(this.handleError<Task>('deleteTask'))
  //   )
  // }
}
