import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule), canLoad: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule), canLoad: [AuthGuard]
  },
  {
    path: 'user-tambah',
    loadChildren: () => import('./user-tambah/user-tambah.module').then( m => m.UserTambahPageModule), canLoad: [AuthGuard]
  },
  {
    path: 'user-edit/:id',
    loadChildren: () => import('./user-edit/user-edit.module').then( m => m.UserEditPageModule), canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canLoad: [AutoLoginGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
