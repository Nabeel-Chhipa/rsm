import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayableComponent } from './payable/payable.component';
import { ReceivableComponent } from './receivable/receivable.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';

const routes: Routes = [
  {
    path: 'payable',
    component: PayableComponent
  },
  {
    path: 'receivable',
    component: ReceivableComponent
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: 'purchase-orders',
    component: PurchaseOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
