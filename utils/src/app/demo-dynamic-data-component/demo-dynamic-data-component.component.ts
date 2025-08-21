import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DynamicFieldType } from '../shared/enums';
import { DynamicContainerConfig } from '../shared/interfaces';

@Component({
  selector: 'app-demo-dynamic-data-component',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './demo-dynamic-data-component.component.html',
  styleUrl: './demo-dynamic-data-component.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DemoDynamicDataComponentComponent {
  toggle = false;
   config:DynamicContainerConfig = {
      parentClass:'d-flex header',
      title: 'dynamic component construction',
      titleClass: 'font-bold m-2 ',
      fields:[
      {
        type: DynamicFieldType.LABEL,
        label: 'First Name',
        parentClass: 'col',
        fieldClass: 'm-2 font-bold',
        valueClass: 'font-low',
      },
      {
        type: DynamicFieldType.LABEL,
        label: 'Second Name',
        parentClass: 'col',
        fieldClass: 'm-2 font-bold',
        valueClass: 'font-low',
      },
      {
        type: DynamicFieldType.LABEL,
        label: 'Last Name',
        fieldClass: 'm-2 font-bold',
        valueClass: 'font-low',
        parentClass: 'col',
      },
      {
        type: DynamicFieldType.GROUP,
        title: 'Address',
        groupClass: 'd-flex gap-2 address-col',
        parentClass: 'p-5',
        fieldClass: 'm-2 font-bold',
        valueClass: 'font-low',
        fields: [
          {
            type: DynamicFieldType.GROUP,
            fields: [
              {
                type: DynamicFieldType.LABEL,
                label: 'First Name I',
                fieldClass: 'font-bold',
                valueClass: 'font-low',
              },
              {
                type: DynamicFieldType.LABEL,
                label: 'Second Name I',
              },
              {
                type: DynamicFieldType.LABEL,
                label: 'Last Name I',
              },
            ],
          },
          {
            type: DynamicFieldType.LABEL,
            label: 'Second Name',
          },
          {
            type: DynamicFieldType.LABEL,
            label: 'Last Name',
          },
        ],
      },
      {
        type:DynamicFieldType.BUTTON,
        label: 'Click me',
        onClick: this.onClick.bind(this)
      }
    ]};
    onClick() {
    this.toggle=!this.toggle;
    console.log("click me to toggle Value", this.toggle);
  }
}
