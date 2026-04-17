import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Elemento } from '../../models/element.model';

@Component({
  selector: 'app-targeta-element',
  templateUrl: './targeta-element.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./targeta-element.component.scss']
})
export class TargetaElementComponent {

  @Input() elemento!: Elemento;
  @Output() seleccionado = new EventEmitter<Elemento>();

  onSeleccionar() {
    this.seleccionado.emit(this.elemento);
  }
}