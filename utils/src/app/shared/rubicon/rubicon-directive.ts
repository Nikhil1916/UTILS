import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { TextComponent } from './components/text/text.component';

const components: any = {
    text:TextComponent
};

@Directive({
  selector: '[appDynamicField]',
})
export class Rubicon implements OnInit {
  @Input() field!: any;
  @Input() group!: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private containerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = components[this.field.type];
    if(!component) {
        const supportedTypes = Object.keys(component).join(", ");
        throw new Error(`Trying to use an unsupported field type (${this.field.type}). Supported types: ${supportedTypes}`);
    }

    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef:any = this.containerRef.createComponent(factory);
    componentRef.instance.field = this.field;
    componentRef.instance.group = this.group;
  }
}
