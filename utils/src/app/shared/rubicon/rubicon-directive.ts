import {
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { TextComponent } from './components/text/text.component';
import { SelectComponent } from './components/select/select.component';
import { SelectV2Component } from './components/select-v2/select-v2.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from '../services/radio/radio.component';
import { DateComponent } from './components/date/date.component';
import { GroupArrayComponent } from './components/group-array/group-array.component';
import { LabelComponent } from './components/label/label.component';

const components: Record<string, any> = {
  text: TextComponent,
  textarea: TextComponent,
  amount: TextComponent,
  select: SelectComponent,
  selectv2: SelectV2Component,
  checkbox: CheckboxComponent,
  radio: RadioComponent,
  date: DateComponent,
  array: GroupArrayComponent,
  label: LabelComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class Rubicon implements OnInit {
  @Input() field!: any;
  @Input() group!: any;
  @Input() slug!: string;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    const component = components[this.field?.type];
    if (!component) {
      console.warn(
        `Rubicon: Unsupported field type "${this.field?.type}". Supported: ${Object.keys(components).join(', ')}`
      );
      return;
    }

    const componentRef:any = this.viewContainerRef.createComponent(component);
    componentRef.instance.field = this.field;
    componentRef.instance.group = this.group;
    componentRef.instance.slug = this.slug;
  }
}
