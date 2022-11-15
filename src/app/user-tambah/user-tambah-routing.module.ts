import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTambahPage } from './user-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: UserTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTambahPageRoutingModule {}
