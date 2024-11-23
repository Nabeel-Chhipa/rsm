import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';

// FlatPicker
import { FlatpickrModule } from 'angularx-flatpickr';

// dropzone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// bootstrap component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RatingModule } from 'ngx-bootstrap/rating';
import { StaffComponent } from './staff/staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResidentComponent } from './resident/resident.component';
import { UsersComponent } from './users/users.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    StaffComponent,
    ResidentComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule,
    NgApexchartsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SimplebarAngularModule,
    NgSelectModule,
    DropzoneModule,
    RatingModule,
    FlatpickrModule.forRoot()
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
})
export class PeopleModule { }
