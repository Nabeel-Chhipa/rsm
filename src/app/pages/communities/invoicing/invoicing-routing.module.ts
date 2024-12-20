import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { OverviewComponent } from './overview/overview.component';
import { GenerateInvoiceComponent } from './generate-invoice/generate-invoice.component';
import { InvoiceReceivingComponent } from './invoice-receiving/invoice-receiving.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'generate-invoice',
    component: GenerateInvoiceComponent
  },
  {
    path: 'invoice-receiving',
    component: InvoiceReceivingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicingRoutingModule { }
