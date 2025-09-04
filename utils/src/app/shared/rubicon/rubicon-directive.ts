import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { TextComponent } from './components/text/text.component';
import { SelectComponent } from './components/select/select.component';

const components: any = {
    text:TextComponent,
    select:SelectComponent
};

@Directive({
  selector: '[appDynamicField]',
})
export class Rubicon implements OnInit {
  @Input() field!: any;
  @Input() group!: any;
  @Input() slug!:string;

  constructor(
    private resolver: ComponentFactoryResolver,
    private containerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    const component = components[this.field.type];
    // console.log(component);
    if(!component) {
        // const supportedTypes = Object.keys(components).join(", ");
        // throw new Error(`Trying to use an unsupported field type (${this.field.type}). Supported types: ${supportedTypes}`);
        return;
    }

    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef:any = this.containerRef.createComponent(factory);
    componentRef.instance.field = this.field;
    componentRef.instance.group = this.group;
    componentRef.instance.slug = this.slug;
  }
}
