import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { PayableComponent } from './payable/payable.component';
import { SharedModule } from 'src/app/shared/shared.module';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Count To
import { CountUpModule } from 'ngx-countup';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';

// Range Slider
import { NgxSliderModule } from 'ngx-slider-v2';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

// dropzone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Leaflet Map
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// bootstrap component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceivableComponent } from './receivable/receivable.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { InvoicesComponent } from './invoices/invoices.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};


@NgModule({
  declarations: [
    PayableComponent,
    ReceivableComponent,
    InvoicesComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule,
    SimplebarAngularModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CountUpModule,
    LeafletModule,
    SlickCarouselModule,
    NgApexchartsModule,
    TooltipModule,
    NgxSliderModule,
    DropzoneModule,
    FlatpickrModule.forRoot()
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FinanceModule { }
