import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ToDoHomeComponent } from './components/to-do-home/to-do-home.component';
import { CompletedComponent } from './components/completed/completed.component';

const routes: Route[] = [
  { path: '', component: ToDoHomeComponent },
  { path: 'completed-tasks', component: CompletedComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ToDoHomeComponent,
    CompletedComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
