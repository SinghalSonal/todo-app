import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Observable
} from 'rxjs/Observable';

import {
  Todo
} from './todo';


// const headers = new HttpHeaders({
//   'Content-Type': 'application/json'
// });
const url = 'https://sonaltodo.azurewebsites.net/api/todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) {}

  getTodos(): Observable < Todo[] > {
    return this.http.get < Todo[] > (url);
  }

  saveTodo(todo): Observable < Todo > {
    return this.http.post < Todo > (url, todo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  updateTodo(todo): Observable < Todo > {
    return this.http.put < Todo > (url + "/" + todo.id, todo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
