import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-barra-cerca',
  templateUrl: './barra-cerca.component.html',
  standalone: true,
  imports: [
    CommonModule
  ],
  styleUrls: ['./barra-cerca.component.scss']
})
export class BarraCercaComponent {

  @Output() cerca = new EventEmitter<string>();

  onCerca(event: any) {
    this.cerca.emit(event.target.value);
  }
}