import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../auth/_guards/auth.guard';
import { AdminListComponent } from './admin-list/admin-list.component';


const routes: Routes = [
  {
    path: 'work',
    children: [
      { path: '', component: TimerComponent },
      { path: 'list', component: ListComponent },
      { path: 'admin-list', component: AdminListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
