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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingSocietiesRoutingModule { }
