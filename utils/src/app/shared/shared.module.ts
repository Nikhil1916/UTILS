import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { DynamicDataComponentComponent } from './dynamic-data-component/dynamic-data-component.component';
import { DemoDynamicDataComponentComponent } from './demo-dynamic-data-component/demo-dynamic-data-component.component';



@NgModule({
  declarations: [
    DynamicDataComponentComponent,
    DemoDynamicDataComponentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DynamicDataComponentComponent,
    DemoDynamicDataComponentComponent
  ],
  providers:[
    DatePipe,
    CurrencyPipe
  ]
})
export class SharedModule { }
