import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms'; // <-- NgModel lives here
import {
  HttpClientModule
} from '@angular/common/http';


import {
  AppComponent
} from './app.component';
import {
  HeroesComponent
} from './heroes/heroes.component';
import {
  HeroDetailComponent
} from './hero-detail/hero-detail.component';
import {
  AppRoutingModule
} from './/app-routing.module';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  HeroService
} from './hero.service';
import {
  MessagesComponent
} from './messages/messages.component';
import {
  MessageService
} from './message.service';
import {
  TodosComponent
} from './todos/todos.component';
import {
  TodoService
} from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    MessagesComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [HeroService, MessageService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
