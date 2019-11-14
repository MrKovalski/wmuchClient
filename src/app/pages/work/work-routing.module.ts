import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../auth/_guards/auth.guard';


const routes: Routes = [
  {
    path: 'work',
    children: [
      { path: '', component: TimerComponent },
      { path: 'list', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
