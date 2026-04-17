import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCataleg } from '../../models/element.model';
@Component({
  selector: 'app-targeta-element',
  templateUrl: './targeta-element.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./targeta-element.component.scss']
})
export class TargetaElementComponent {

  @Input() elemento!: ElementCataleg;
  @Output() seleccionado = new EventEmitter<ElementCataleg>();

  onSeleccionar() {
    this.seleccionado.emit(this.elemento);
  }
}