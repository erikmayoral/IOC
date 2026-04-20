import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferitsService, ElementCataleg } from '../../services/preferits.service';

@Component({
  selector: 'app-element-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.scss']
})
export class ElementCardComponent {
  @Input({ required: true }) element!: ElementCataleg;
 
  // Injectem el servei
  private preferitsService = inject(PreferitsService);

  togglePreferit(): void {
    if (this.isFavorite) {
      this.preferitsService.eliminarPreferit(this.element.id);
    } else {
      this.preferitsService.afegirPreferit(this.element);
    }
  }

  get isFavorite(): boolean {
    return this.preferitsService.esPreferit(this.element.id);
  }
}
