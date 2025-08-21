import { Component, Input, input, OnInit } from '@angular/core';
import { DynamicContainerConfig, DynamicFields } from '../interfaces';
import { DynamicFieldType } from '../enums';

@Component({
  selector: 'app-dynamic-data-component',
  templateUrl: './dynamic-data-component.component.html',
  styleUrl: './dynamic-data-component.component.css',
})
export class DynamicDataComponentComponent implements OnInit {
  toggle = false;
  DynamicFieldType = DynamicFieldType;
  @Input({required:true}) config!:DynamicContainerConfig;
  ngOnInit(): void {
    console.log(this.config);
  }
}
