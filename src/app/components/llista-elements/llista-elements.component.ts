import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { ElementService } from '../../services/element.service';

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

  constructor(public elementService: ElementService) {}

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }

  filtrarElementos(texto: string) {
    this.elementService.cercar(texto);
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}