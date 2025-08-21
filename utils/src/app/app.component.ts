import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { DemoDynamicDataComponentComponent } from './demo-dynamic-data-component/demo-dynamic-data-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoDynamicDataComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'utils';
}
