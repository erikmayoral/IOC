import { Component } from '@angular/core';
import { LlistaElementsComponent } from './components/llista-elements/llista-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LlistaElementsComponent],
  template: `<app-llista-elements></app-llista-elements>`
})
export class AppComponent {}