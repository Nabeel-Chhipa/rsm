import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    PropertyOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    PropertyOverviewComponent
  ]
})
export class SharedModule { }
