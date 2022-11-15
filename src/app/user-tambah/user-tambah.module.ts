import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTambahPageRoutingModule } from './user-tambah-routing.module';

import { UserTambahPage } from './user-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTambahPageRoutingModule
  ],
  declarations: [UserTambahPage]
})
export class UserTambahPageModule {}
