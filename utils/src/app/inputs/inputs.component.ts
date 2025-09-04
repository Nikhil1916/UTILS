import { Component, OnInit } from '@angular/core';
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
  group:any;
  slug!:string;

  constructor(private formS:FormCreateService) {

  }
  ngOnInit(): void {
      this.group = this.formS.createForm(this.fields);
      this.slug = "rubicon-test";
      console.log(this.group, this.fields, this.slug);
  }

}
