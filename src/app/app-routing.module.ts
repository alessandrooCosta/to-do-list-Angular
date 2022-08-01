import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HearderComponent } from './hearder/hearder.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'todo', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
