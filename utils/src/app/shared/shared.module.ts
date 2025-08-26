import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { DynamicDataComponentComponent } from './dynamic-data-component/dynamic-data-component.component';
import { DemoDynamicDataComponentComponent } from './demo-dynamic-data-component/demo-dynamic-data-component.component';
import { DynamicHostDirective } from './directives/dynamicHost.directive';



@NgModule({
  declarations: [
    DynamicDataComponentComponent,
    DemoDynamicDataComponentComponent,
    DynamicHostDirective
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
