import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rubicon',
  standalone: true,
  imports: [],
  templateUrl: './rubicon.component.html',
  styleUrl: './rubicon.component.css'
})
export class RubiconComponent {
 @Input() fields!:any;
 @Input() group!:any;

}
