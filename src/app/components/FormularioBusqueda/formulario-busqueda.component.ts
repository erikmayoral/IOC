import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ElementService } from '../../services/element.service';
import { codiDisponibleValidator } from '../../validadors/codi-disponible.validator';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-busqueda.component.html',
  styleUrl: './formulario-busqueda.component.scss'
})
export class FormulariCercaComponent implements OnInit {
  formulariCerca!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private elementService: ElementService
  ) {}

  ngOnInit(): void {
    this.formulariCerca = this.fb.group({
      termeCerca: ['',
        [Validators.minLength(2), Validators.maxLength(50)],
        [codiDisponibleValidator(this.elementService)]
      ]
    });

    // 1. Debounce de 400ms (ajustado de 500 a 400)
    this.formulariCerca.get('termeCerca')?.valueChanges
      .pipe(debounceTime(400))
      .subscribe(() => {
        if (this.formulariCerca.get('termeCerca')?.valid) {
          this.cercar();
        }
      });
  }

  // 2. Botón Netejar: Comprueba si hay texto para mostrarse en el HTML
  get teText(): boolean {
    return !!this.formulariCerca.get('termeCerca')?.value;
  }

  // 3. Indicador visual: Valida si el estado es 'PENDING'
  get estaValidant(): boolean {
    return this.formulariCerca.get('termeCerca')?.status === 'PENDING';
  }

  cercar(): void {
    const terme = this.formulariCerca.get('termeCerca')?.value;
    this.elementService.cercar(terme);
  }

  netejar(): void {
    this.formulariCerca.reset();
    this.elementService.obtenirPopulars();
  }

  // 4. Mostrar errores solo si es touched (ya incluido en la lógica)
  get termeInvalid(): boolean {
    const control = this.formulariCerca.get('termeCerca');
    return !!(control?.invalid && control?.touched);
  }

  get missatgeError(): string {
    const control = this.formulariCerca.get('termeCerca');
    if (!control?.touched) return ''; // No mostramos error si no se ha tocado

    if (control.hasError('minlength')) return 'Mínim 2 caràcters';
    if (control.hasError('maxlength')) return 'Màxim 50 caràcters';
    if (control.hasError('sensResultats')) return 'No hi ha resultats per a aquesta cerca';
   
    return '';
  }
}