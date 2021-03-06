import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { ListComponent } from './list/list.component';
import { TimerComponent } from './timer/timer.component';
import { AdminListComponent } from './admin-list/admin-list.component';


@NgModule({
  declarations: [
    WorkComponent,
    ListComponent,
    TimerComponent,
    AdminListComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
