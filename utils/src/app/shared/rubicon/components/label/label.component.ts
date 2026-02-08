import { Component, Input } from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.css',
})
export class LabelComponent {
  @Input() field!: { key: string; label?: string };
  @Input() group!: any;
  @Input() slug!: string;

  constructor(private translateS: TranslationService) {}

  getLabel(): string {
    return this.translateS.getLabel(this.slug, this.field?.key) || this.field?.label || '';
  }
}
