import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-to-do-home',
  templateUrl: './to-do-home.component.html',
  styleUrls: ['./to-do-home.component.scss'],
})
export class ToDoHomeComponent implements OnInit {
  tasks: Task[] = this.todoSrv.tasks;

  constructor(private todoSrv: TodoService) {}

  ngOnInit(): void {}

  completeTask(id: number) {
    this.todoSrv.editTask(id);
  }

  addTask(task: string): void {
    this.todoSrv.addTask(task);
  }
}
