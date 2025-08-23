import { Injectable } from '@angular/core';
import { DynamicFieldType } from '../enums';
import { DynamicFields } from '../interfaces';
import { get } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class MappingService {

  constructor() { }

  attachValues(config:DynamicFields[], response:any):any {
    return config?.map((field:any)=>{
      switch(field?.type) {
        case DynamicFieldType.LABEL:
          const value = field?.key ? get(response, field?.key) : undefined
          return {
            ...field, 
            value
          }
        case DynamicFieldType.GROUP:
          return {
            ...field,
            fields: this.attachValues(field?.fields || [], response)
          }
        default:
          return field
      }
    })
  }
}
