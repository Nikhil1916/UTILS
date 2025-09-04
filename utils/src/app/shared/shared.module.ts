import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { DynamicDataComponentComponent } from './dynamic-data-component/dynamic-data-component.component';
import { DemoDynamicDataComponentComponent } from './demo-dynamic-data-component/demo-dynamic-data-component.component';
import { DynamicHostDirective } from './directives/dynamicHost.directive';
import { FormCheckComponent } from './form-check/form-check.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './rubicon/components/text/text.component';
import { RubiconComponent } from './rubicon/rubicon.component';
import { Rubicon } from './rubicon/rubicon-directive';
import { SelectComponent } from './rubicon/components/select/select.component';



@NgModule({
  declarations: [
    DynamicDataComponentComponent,
    DemoDynamicDataComponentComponent,
    DynamicHostDirective,
    FormCheckComponent,
    TextComponent,
    RubiconComponent,
    Rubicon,
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    DynamicDataComponentComponent,
    DemoDynamicDataComponentComponent,
    FormCheckComponent,
    RubiconComponent
  ],
  providers:[
    DatePipe,
    CurrencyPipe
  ]
})
export class SharedModule { }
