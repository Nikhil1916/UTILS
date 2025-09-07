import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SAMPLE_FORM_CONFIG } from '../shared/formConfig';
import { FormCreateService } from '../shared/services/form-create.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
  standalone: true,
  imports: [SharedModule, CommonModule],
})
export class InputsComponent implements OnInit {
  fields = SAMPLE_FORM_CONFIG;
  group: any;
  slug!: string;

  constructor(private formS: FormCreateService, private cd:ChangeDetectorRef) {}
  ngOnInit(): void {
    this.group = this.formS.createForm(this.fields);
    // this.fields.forEach((field: any) => {
    //   if (field.type === 'selectv2' && field.functionBinders) {
    //     const fnName = field.functionBinders.onChange as keyof this;
    //     const fn = this[fnName] as unknown as Function;
    //     if(typeof fn == "function") {
    //       field.functionBinders.onChange = fn.bind(this);
    //     }
    //   }
    // });
    this.formS.bindFunctionHandlers(this.fields, this);
    this.slug = 'rubicon-test';
    console.log(this.group, this.fields, this.slug);
  }

  onChange(e: any) {
    console.log(e);
    this.cd.detectChanges();
  }
}
