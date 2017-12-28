import {
  Component,
  OnInit
} from '@angular/core';
import {
  TodoService
} from '../todo.service';
import {
  Todo
} from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: Todo[]
  myTodo: Todo = {
    id: 0,
    name: '',
    isComplete: false
  }

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(x => this.todos = x);
  }

  saveTodo(): void {

    if (this.myTodo.id == 0) {
      this.todoService.saveTodo(this.myTodo)
        .subscribe(
          result => {
            console.log(result);
            this.myTodo = result;
            this.getTodos();
          },
          error => {
            console.log(error);
          }
        );
    } else {
      this.todoService.updateTodo(this.myTodo)
      .subscribe(
        result => {
          console.log(result);
          this.myTodo = result;
          this.getTodos();
        },
        error => {
          console.log(error);
        }
      );
    }


  }

  editTodo(item): boolean {
    this.myTodo = item;
    return false;
  }

}
