import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  completedTasks: Task[] = this.todoSrv.tasks;

  constructor(private todoSrv: TodoService) {}

  ngOnInit(): void {}
}
