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
    { id: 1, nom: 'Pel·lícula 1', descripcio: 'Descripció pel·lícula 1' },
    { id: 2, nom: 'Pel·lícula 2', descripcio: 'Descripció pel·lícula 2' },
    { id: 3, nom: 'Pel·lícula 3', descripcio: 'Descripció pel·lícula 3' }
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