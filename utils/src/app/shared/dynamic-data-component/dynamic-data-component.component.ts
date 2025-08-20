import { Component, OnInit } from '@angular/core';
import { DynamicField } from '../interfaces';
import { DynamicFieldType } from '../enums';

@Component({
  selector: 'app-dynamic-data-component',
  templateUrl: './dynamic-data-component.component.html',
  styleUrl: './dynamic-data-component.component.css',
})
export class DynamicDataComponentComponent implements OnInit {
  parentClass = 'd-flex header';
  fieldConfig: DynamicField[] = [
    {
      type: DynamicFieldType.LABEL,
      label: 'First Name',
      parentClass: 'col',
         fieldClass: 'm-2 font-bold',
              valueClass: 'font-low'
    },
    {
      type: DynamicFieldType.LABEL,
      label: 'Second Name',
        parentClass: 'col',
           fieldClass: 'm-2 font-bold',
              valueClass: 'font-low'
    },
    {
      type: DynamicFieldType.LABEL,
      label: 'Last Name',
        fieldClass: 'm-2 font-bold',
              valueClass: 'font-low',
        parentClass: 'col'
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
              valueClass: 'font-low'
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
  ];
  DynamicFieldType = DynamicFieldType;

  ngOnInit(): void {
    console.log(this.fieldConfig);
  }
}
