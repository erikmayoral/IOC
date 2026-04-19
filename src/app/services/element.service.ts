import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})

export class ElementService {

  private apiUrl = environment.apiUrl;

  private _elements = signal<ElementCataleg[]>([]);
  private _carregant = signal<boolean>(false);
  private _error = signal<string | null>(null);

  elements = this._elements.asReadonly();
  carregant = this._carregant.asReadonly();
  error = this._error.asReadonly();

  constructor(private http: HttpClient) {}

  obtenirPopulars(): void {
    this._carregant.set(true);
    this._error.set(null);

    this.http.get<ElementCataleg[]>(`${this.apiUrl}/elements?popular=true`)
      .subscribe({
        next: (data) => {
          this._elements.set(data);
          this._carregant.set(false);
        },
        error: () => {
          this._error.set('No s’han pogut carregar els elements populars.');
          this._carregant.set(false);
        }
      });
  }
  cercar(terme: string): void {
    this._carregant.set(true);
    this._error.set(null);

    this.http.get<ElementCataleg[]>(`${this.apiUrl}/elements?nom_like=${terme}`)
      .subscribe({
        next: (data) => {
          this._elements.set(data);
          this._carregant.set(false);
        },
        error: () => {
          this._error.set('Error en la cerca d’elements.');
          this._carregant.set(false);
        }
      });
  }
}