import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './security/components/login/login.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>AdminModule)},
  {path:"user",loadChildren:()=>import('./users/users.module').then(m=>UsersModule)},
  {path:"**",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
