import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { ResidentComponent } from './resident/resident.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'resident',
    component: ResidentComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
