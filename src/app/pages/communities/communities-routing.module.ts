import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: "communities",
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
  },
  {
    path: 'feedback',
    loadChildren: () => import('./customer-feedback/customer-feedback.module').then(m => m.CustomerFeedbackModule)
  },
  {
    path: 'parking',
    loadChildren: () => import('./parking/parking.module').then(m => m.ParkingModule)
  },
  {
    path: 'visitors',
    loadChildren: () => import('./visitors/visitors.module').then(m => m.VisitorsModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'accounting',
    loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule)
  },
  {
    path: 'hr',
    loadChildren: () => import('./hr/hr.module').then(m => m.HrModule)
  },
  {
    path: 'vendors',
    loadChildren: () => import('./vendor-management/vendor-management.module').then(m => m.VendorManagementModule)
  },
  {
    path: 'resident',
    loadChildren: () => import('./resident-management/resident-management.module').then(m => m.ResidentManagementModule)
  },
  {
    path: 'add-communities',
    loadChildren: () => import('./add-communities/add-communities.module').then(m => m.AddCommunitiesModule)
  },
  {
    path: 'tenant',
    loadChildren: () => import('./tenant-setup/tenant-setup.module').then(m => m.TenantSetupModule)
  },
  {
    path: 'income-types',
    loadChildren: () => import('./income-types/income-types.module').then(m => m.IncomeTypesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunitiesRoutingModule { }