import { Observable } from 'rxjs/Observable';
import { TodoListState, TodoState } from '../../../store/todo/todo.state';
import { Store } from '@ngrx/store';
import Todo from '../../../models/todo.model';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as TodoAction from '../../../store/todo/todo.action';

export interface AppState {
  todos: TodoListState;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private stores: Store<TodoState[]>;
  ) { }
  todoListState$: Observable<TodoState[]>;

  ngOnInit() {
    this.todoListState$ = this.stores.select(state => state.todos);
    this.stores.dispatch(new TodoAction.GetTodos());
  }

}
