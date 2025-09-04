import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { DemoDynamicDataComponentComponent } from './shared/demo-dynamic-data-component/demo-dynamic-data-component.component';
import { InputsComponent } from "./inputs/inputs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, InputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'utils';
}
