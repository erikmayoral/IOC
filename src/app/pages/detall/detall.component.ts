import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetallComponent implements OnInit {

  id: string | null = null;
  element: any;

  dadesProva = [
    { id: 1, nom: 'Producto 1', descripcio: 'Descripción del producto 1' },
    { id: 2, nom: 'Producto 2', descripcio: 'Descripción del producto 2' },
    { id: 3, nom: 'Producto 3', descripcio: 'Descripción del producto 3' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    const trobat = this.dadesProva.find(
      item => item.id === Number(this.id)
    );

    this.element = trobat ? { ...trobat } : null;
  }
}