import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API_URL = 'http://localhost:3000/todoList';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  saveTodo(todo: Todo): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(this.API_URL + '/' + id);
  }

  update(id: number,todo:Todo):Observable<Todo>{
    return this.httpClient.put<Todo>(this.API_URL +'/'+id,todo);
  }
}
