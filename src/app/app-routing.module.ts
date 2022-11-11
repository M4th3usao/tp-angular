import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DisciplineComponent } from "./components/discipline/discipline.component";
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from "./components/list/list.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TimerComponent } from "./components/timer/timer.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'list', component: ListComponent},
    {path: 'disciplines', component: DisciplineComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}