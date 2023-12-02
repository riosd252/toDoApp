import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-to-do-home',
  templateUrl: './to-do-home.component.html',
  styleUrls: ['./to-do-home.component.scss'],
})
export class ToDoHomeComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoSrv: TodoService) {}

  ngOnInit(): void {
    setTimeout(() => {
      const main = document.getElementById('main');
      const h1 = document.getElementById('h1');
      h1!.className = 'd-none';
      main!.classList.remove('d-none');
      this.tasks = this.todoSrv.getTasks();
    }, 2000);
  }

  completeTask(id: number) {
    this.todoSrv.editTask(id);
  }

  addTask(task: string): void {
    setTimeout(() => {
      this.todoSrv.addTask(task);
    }, 2000);

    const input = document.querySelector('input') as HTMLInputElement;
    input.value = '';
  }
}
