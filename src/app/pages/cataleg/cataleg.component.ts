import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollingModule],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalegComponent {

  // 👉 mínimo 50 elementos (te lo piden)
  elements = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    nom: `Pel·lícula ${i + 1}`
  }));
}