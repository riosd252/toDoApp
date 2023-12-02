import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: Task[] = [];
  constructor() {}

  getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '{}');
    return this.tasks;
  }

  editTask(id: number) {
    this.tasks[id].completed = !this.tasks[id].completed;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: string) {
    this.tasks.push({ id: this.tasks.length, title: task, completed: false });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
