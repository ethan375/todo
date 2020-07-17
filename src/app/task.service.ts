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

  private baseTaskRoute = 'https://ethans-todo-api.herokuapp.com/tasks'

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

  toggleCompleted(task): Observable<Task> {
    const route = this.baseTaskRoute + `/toggle-completed/${task["_id "]}`
    //eventually in tap we need to send the user a message
    return this.http.patch<Task>(route, task, this.httpOptions).pipe(
      tap((updatedTask) => `this is the task: ${updatedTask}`),
      catchError(this.handleError<Task>('toggleCompleted'))
    )
  }


  getTask(taskId: String): Observable<Task> {
    const route = this.baseTaskRoute + `/${taskId}`

    return this.http.get<Task>(route, this.httpOptions).pipe
    (tap((task) => console.log(`task fetched: ${task}`)),
      catchError(this.handleError<Task>('Theres been an error!')))
  }



  deleteTask(task: String): Observable<any> {
    const route = this.baseTaskRoute + `/delete/${task}`

    return this.http.delete<any>(route).pipe(
      tap( deletedTask => console.log(`task deleted`)),
        catchError(this.handleError(`some shit went wrong`))
    )
  }
}
