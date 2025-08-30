import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { DynamicDataComponentComponent } from './dynamic-data-component/dynamic-data-component.component';
import { DemoDynamicDataComponentComponent } from './demo-dynamic-data-component/demo-dynamic-data-component.component';
import { DynamicHostDirective } from './directives/dynamicHost.directive';
import { FormCheckComponent } from './form-check/form-check.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicDataComponentComponent,
    DemoDynamicDataComponentComponent,
    DynamicHostDirective,
    FormCheckComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    DynamicDataComponentComponent,
    DemoDynamicDataComponentComponent,
    FormCheckComponent
  ],
  providers:[
    DatePipe,
    CurrencyPipe
  ]
})
export class SharedModule { }
