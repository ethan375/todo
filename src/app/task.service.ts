import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
}
