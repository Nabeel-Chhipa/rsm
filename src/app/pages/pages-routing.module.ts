import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  {
    path: 'communities', loadChildren: () => import('./communities/communities.module').then(m => m.CommunitiesModule)
  },
  {
    path: 'profile', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule)
  },
  {
    path: 'app', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
  },
  {
    path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'finance', loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
