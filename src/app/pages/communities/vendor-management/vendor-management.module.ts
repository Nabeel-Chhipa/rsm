import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VendorManagementRoutingModule } from './vendor-management-routing.module';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

// Date Format
import { DatePipe } from '@angular/common';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// dropzone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// bootstrap component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    VendorsComponent,
    VendorDetailComponent
  ],
  imports: [
    CommonModule,
    VendorManagementRoutingModule,
    SharedModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgApexchartsModule,
    TabsModule.forRoot(),
    SimplebarAngularModule,
    DropzoneModule
  ],
  providers: [
    DatePipe,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
})
export class VendorManagementModule { }
