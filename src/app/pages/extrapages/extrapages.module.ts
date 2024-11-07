import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Bootstrap Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule
  ]
})
export class ExtrapagesModule { }
