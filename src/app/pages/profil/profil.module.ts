import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { AdminProfilComponent } from './admin-profil/admin-profil.component';


@NgModule({
  declarations: [
    ProfilComponent,
    AdminProfilComponent],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
