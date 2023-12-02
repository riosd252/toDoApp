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

  ngOnInit(): void {
    setTimeout(() => {
      const main = document.getElementById('main');
      const h1 = document.getElementById('h1');
      h1!.className = 'd-none';
      main!.classList.remove('d-none');
    }, 2000);
  }
}
