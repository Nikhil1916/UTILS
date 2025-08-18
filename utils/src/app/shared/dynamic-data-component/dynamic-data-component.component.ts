import { Component, OnInit } from '@angular/core';
import { DynamicField } from '../interfaces';
import { DynamicFieldType } from '../enums';

@Component({
  selector: 'app-dynamic-data-component',
  templateUrl: './dynamic-data-component.component.html',
  styleUrl: './dynamic-data-component.component.css',
})
export class DynamicDataComponentComponent implements OnInit {
  fieldConfig: DynamicField[] = [
    {
      type: DynamicFieldType.LABEL,
      label: 'First Name',
    },
    {
      type: DynamicFieldType.LABEL,
      label: 'Second Name',
    },
    {
      type: DynamicFieldType.LABEL,
      label: 'Last Name',
    },
    {
      type: DynamicFieldType.GROUP,
      title: 'Address',
      parentClass:'d-flex gap-2',
      fields: [
        {
          type: DynamicFieldType.LABEL,
          label: 'First Name',
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
