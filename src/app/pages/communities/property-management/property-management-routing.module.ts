import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';

const routes: Routes = [
  {
    path: '',
    component: PropertiesComponent
  },
  {
    path: 'overview',
    component: PropertyOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyManagementRoutingModule { }
