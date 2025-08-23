import { Component, Input, OnInit } from '@angular/core';
import { DynamicContainerConfig, DynamicFields } from '../interfaces';
import { DynamicFieldType } from '../enums';
import { MappingService } from '../services/mapping-service.service';

@Component({
  selector: 'app-dynamic-data-component',
  templateUrl: './dynamic-data-component.component.html',
  styleUrl: './dynamic-data-component.component.css',
})
export class DynamicDataComponentComponent implements OnInit {
  toggle = false;
  DynamicFieldType = DynamicFieldType;
  @Input({required:true}) config!:DynamicContainerConfig;
  @Input({required:true}) response!:any;
  constructor(private mappingS:MappingService) {}
  ngOnInit(): void {
    console.log(this.config);
    this.setMapping();
  }

  setMapping() {
    this.config.fields = this.mappingS.attachValues(this.config.fields || [], this.response)
  }
}
