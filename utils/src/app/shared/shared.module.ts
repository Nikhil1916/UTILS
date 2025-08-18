import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDataComponentComponent } from './dynamic-data-component/dynamic-data-component.component';



@NgModule({
  declarations: [
    DynamicDataComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DynamicDataComponentComponent
  ]
})
export class SharedModule { }
