import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { SharedModule } from 'src/app/shared/shared.module';

// Count To
import { CountUpModule } from 'ngx-countup';

// Mask
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

// Bootstrap Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Drop Zone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ReportsRoutingModule } from './reports-routing.module';
import { IndexComponent } from './index/index.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CountUpModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxMaskDirective,
    NgxMaskPipe,
    DropzoneModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [
    provideNgxMask(),
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})

export class ReportsModule { }