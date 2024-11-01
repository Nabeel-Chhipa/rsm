import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: 'helpDesk',
    loadChildren: () => import('./help-desk/help-desk.module').then(m => m.HelpDeskModule)
  },
  {
    path: 'invoicing',
    loadChildren: () => import('./invoicing/invoicing.module').then(m => m.InvoicingModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
  },
  {
    path: 'properties',
    loadChildren: () => import('./property-management/property-management.module').then(m => m.PropertyManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingSocietiesRoutingModule { }
