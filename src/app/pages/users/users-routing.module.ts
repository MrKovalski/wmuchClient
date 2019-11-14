import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../work/list/list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from '../auth/_guards/auth.guard';


const routes: Routes = [
  { path: 'users',
    children: [
      { path: '', component: UserListComponent, },
      { path: 'detail', component: UserDetailComponent,  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
