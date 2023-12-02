import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: Task[] = [];
  constructor() {}

  getTasks() {
    return this.tasks;
  }

  editTask(id: number) {
    this.tasks[id].completed = !this.tasks[id].completed;
  }

  addTask(task: string) {
    this.tasks.push({ id: this.tasks.length, title: task, completed: false });
  }
}
