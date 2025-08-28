// /to add validation of field on submit

import { Injectable } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldConfig, ValidatorConfig } from '../model/dynamic-form.model';

@Injectable({
  providedIn: 'root'
})
export class FormCreateService {
  constinue = {};
  save = {};
  constructor(private fb:FormBuilder) { }

  createForm(config:any) {
    const group:{[key:string]:any} = {};
    config.forEach((field:any) => {
      if(field.type == "array") {
        group[field.key] = this.fb.array([]);
      } else if(field.type == "label") {

      } else {
        group[field.key] = new FormControl(
          {
            value:field.defaultValue || null,
            disabled: field.disabled || false
          },
          this.bindValidators(field.validators || [])
        )
      }
    });
  }

  private bindValidators(validators:ValidatorConfig[]):any{
    if(!validators || validators.length == 0) return null;

    const angularValidatoes = validators.map((v)=>{
      switch(v.name){
        case 'required':
          return Validators.required
        case 'minlength':
          return Validators.minLength(v.value)
        case 'maxlength':
          return Validators.maxLength(v.value)
        case 'pattern':
          return Validators.pattern(v.value)
        case 'amountMin': 
          return (control: FormControl) => {
            if (control.value != null && +control.value < v.value) {
              return { amountMin: true };
            }
            return null;
          };
        default: return null
      }
    }).filter(Boolean)
    return angularValidatoes;
  }

  getControl(form:FormGroup, key:string):FormControl {
    return form.get(key) as FormControl;
  }

  getFormArray(form: FormGroup, key: string): FormArray {
    return form.get(key) as FormArray;
  }

  patchValue(form: FormGroup, values: any) {
    form.patchValue(values);
  }

  setValue(form: FormGroup, values: any) {
    form.setValue(values);
  }

  resetForm(form: FormGroup, values: any = {}) {
    form.reset(values);
  }

  getRawValue(form: FormGroup) {
    return form.getRawValue();
  }

  addFormArrayItem(formArray:FormArray, children:FieldConfig[]) {
    
  }
}
