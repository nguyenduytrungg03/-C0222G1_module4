import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";
import {FormControl, FormGroup} from "@angular/forms";
import {TodoService} from "../todo.service";

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  todoForm: FormGroup


  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.findAll().subscribe(value => {
      this.todos = value;
    }, error => {
      alert('error');
    }, () => {
      console.log('complete')
    });
    this.todoForm = new FormGroup({
      content: new FormControl()
    })
  }


  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
    }, error => {
      console.log(error)
    }, () => {
      this.ngOnInit()
    });
  }

  create(): void {
    const todo = this.todoForm.value;
    this.todoService.saveTodo(todo).subscribe(() => {
    }, error => {
      console.log(error)
    }, () => {
      this.ngOnInit()
    })
  }
  update(id: number) {
    const todo = this.todoForm.value;
    this.todoService.update(id,todo).subscribe(value =>{
    },error => {
      console.log(error)
    },() => {
      this.ngOnInit()
    })
  }
}
