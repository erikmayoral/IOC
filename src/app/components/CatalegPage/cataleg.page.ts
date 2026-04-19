import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'cataleg.page.html',
})
export class CatalegPage {
  private elementService = inject(ElementService);

  // Signals del servicio
  elements = this.elementService.elements;
  carregant = this.elementService.carregant;
  error = this.elementService.error;

  // Opcional: estado derivado
  teElements = computed(() => this.elements().length > 0);

  ngOnInit() {
    this.carregarPopulars();
  }

  carregarPopulars() {
    this.elementService.obtenirPopulars();
  }

  reintentar() {
    this.carregarPopulars();
  }

  cercar(terme: string) {
    this.elementService.cercar(terme);
  }
}