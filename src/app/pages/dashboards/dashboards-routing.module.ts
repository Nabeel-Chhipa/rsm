import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { IndexComponent } from './index/index.component';
import { ProjectsComponent } from './projects/projects.component';
import { BookingsComponent } from './bookings/bookings.component';
import { VendorComponent } from './vendor/vendor.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "communities",
    component: IndexComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "bookings",
    component: BookingsComponent
  },
  {
    path: "vendors",
    component: VendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
