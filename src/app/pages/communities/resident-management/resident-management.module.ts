import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentManagementRoutingModule } from './resident-management-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ResidentManagementRoutingModule
  ]
})
export class ResidentManagementModule { }
