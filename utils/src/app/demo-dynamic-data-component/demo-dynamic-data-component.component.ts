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
      titleClass: 'font-bold m-2 border-none',
      fields:[
      {
        type: DynamicFieldType.LABEL,
        label: 'First Name',
        parentClass: 'col',
        fieldClass: 'm-2 font-bold',
        valueClass: 'font-low',
        key: 'first_name'
      },
      {
        type: DynamicFieldType.LABEL,
        label: 'Second Name',
        parentClass: 'col',
        fieldClass: 'm-2 font-bold',
        valueClass: 'font-low',
        key: 'second_name'
      },
      {
        type: DynamicFieldType.LABEL,
        label: 'Last Name',
        fieldClass: 'm-2 font-bold',
        valueClass: 'font-low',
        parentClass: 'col',
        key: 'last_name'
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
                label: 'Country',
                fieldClass: 'font-bold',
                valueClass: 'font-low',
                key: 'address.country'
              },
              {
                type: DynamicFieldType.LABEL,
                label: 'State',
                key: 'address.state'
              },
              {
                type: DynamicFieldType.LABEL,
                label: 'City',
                key: 'address.city'
              },
            ],
          },
          {
            type: DynamicFieldType.LABEL,
            label: 'Salary',
            key: 'salary'
          },
          {
            type: DynamicFieldType.LABEL,
            label: 'Age',
            key: 'age'
          },
          {
            type: DynamicFieldType.INNERHTML,
            label: 'innerhtml',
            key: 'inner_html'
          }
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

  response = {
    first_name: 'Nikhil',
    second_name: 'Manoj',
    last_name: 'Chawla',
    address: {
      city: 'Ludhiana',
      country: 'India',
      state: 'Punjab'
    },
    salary:50000,
    age:26
  }

}
