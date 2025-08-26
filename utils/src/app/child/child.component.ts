import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child-box">
      <p>{{ title }}</p>
      <button (click)="onClick()">Click me</button>
    </div>
  `,
  styles: [`.child-box { border: 1px solid #ccc; padding: 10px; margin: 4px;}`]
})
export class ChildComponent {
  @Input() title: string = '';
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit('Hello from child with title: ' + this.title);
  }
}
