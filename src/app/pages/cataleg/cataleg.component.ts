import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.css'
})
export class CatalegComponent {

  elements = [
    {
      id: 1,
      nom: 'Pel·lícula 1'
    },
    {
      id: 2,
      nom: 'Pel·lícula 2'
    },
    {
      id: 3,
      nom: 'Pel·lícula 3'
    }
  ];
}