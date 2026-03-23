import { Component, OnInit } from '@angular/core';
import { Elemento } from '../../models/element.model';
import { CommonModule } from '@angular/common';
import { ELEMENTOS } from '../../mocks/dades-mock';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';


@Component({
  selector: 'app-llista-elements',
  templateUrl: './llista-elements.component.html',
  standalone: true,
  imports: [
  CommonModule,
  BarraCercaComponent,
  TargetaElementComponent
],
  styleUrls: ['./llista-elements.component.scss']
})
export class LlistaElementsComponent implements OnInit {

  elementos: Elemento[] = ELEMENTOS;
  elementosFiltrados: Elemento[] = [];
  elementoSeleccionado: Elemento | null = null;

  ngOnInit() {
    this.elementosFiltrados = [...this.elementos];
  }

  onElementoSeleccionado(elemento: Elemento) {
    this.elementoSeleccionado = elemento;
  }

  filtrarElementos(texto: string) {
    this.elementosFiltrados = this.elementos.filter(el =>
      el.nombre.toLowerCase().includes(texto.toLowerCase())
    );
  }

  trackById(index: number, item: Elemento) {
    return item.id;
  }
}