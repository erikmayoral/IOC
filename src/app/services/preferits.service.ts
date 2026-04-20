import { Injectable, signal, computed, Signal } from '@angular/core';

export interface ElementCataleg {
  id: string;
  titol: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatgeUrl: string;
  esPopular: boolean;
  unitats: number;
}

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly CLAU_STORAGE = 'preferits-cataleg';
 
  private readonly preferitsSignal = signal<ElementCataleg[]>([]);

  readonly preferits: Signal<ElementCataleg[]> = this.preferitsSignal.asReadonly();
  readonly totalPreferits = computed(() => this.preferitsSignal().length);

  constructor() {
    this.carregarDeLocalStorage();
  }

  private carregarDeLocalStorage(): void {
    try {
      const dades = localStorage.getItem(this.CLAU_STORAGE);
      if (dades) {
        this.preferitsSignal.set(JSON.parse(dades));
      }
    } catch (error) {
      console.error('Error carregant preferits de localStorage:', error);
      this.preferitsSignal.set([]);
    }
  }

  private desarALocalStorage(): void {
    try {
      localStorage.setItem(this.CLAU_STORAGE, JSON.stringify(this.preferitsSignal()));
    } catch (error) {
      console.error('Error desant preferits a localStorage:', error);
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    if (!this.esPreferit(element.id)) {
      this.preferitsSignal.update(llista => [...llista, element]);
      this.desarALocalStorage();
    }
  }

  eliminarPreferit(id: string): void {
    this.preferitsSignal.update(llista =>
      llista.filter(e => e.id !== id)
    );
    this.desarALocalStorage();
  }

  esPreferit(id: string): boolean {
    return this.preferitsSignal().some(e => e.id === id);
  }
}