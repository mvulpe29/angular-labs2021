import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerServiceProvider } from './customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerEditComponent } from './customer-details/customer-edit/customer-edit.component';
import { ForbiddenEmailValidatorDirective } from './forbidden-email-validator.directive';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomerListComponent, CustomerDetailsComponent, CustomerEditComponent, ForbiddenEmailValidatorDirective, AddressComponent
  ],
  providers: [CustomerServiceProvider],
})
export class CustomerModule {
}
