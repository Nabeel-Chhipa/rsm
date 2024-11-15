import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';

const routes: Routes = [
  {
    path: "",
    component: VendorsComponent
  },
  {
    path: "vendor-detail",
    component: VendorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorManagementRoutingModule { }
