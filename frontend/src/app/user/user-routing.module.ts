import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [

  { path: 'user-details', component: UserDetailsComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-edit', component: UserEditComponent },
  { path: 'user-delete', component: UserDeleteComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
