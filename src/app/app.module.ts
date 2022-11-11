import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TimerComponent } from './components/timer/timer.component';
import { ListComponent } from './components/list/list.component';
import { DisciplineComponent } from './components/discipline/discipline.component';
import { TasksService } from './services/tasks.service';
import { TimerService } from './services/timer.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from './services/list.service';
import { TimerLimiterComponent } from './components/timer-limiter/timer-limiter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    TimerComponent,
    ListComponent,
    DisciplineComponent,
    TimerLimiterComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TasksService, TimerService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
