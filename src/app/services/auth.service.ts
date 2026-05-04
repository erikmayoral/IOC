import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Usuari {
    id: number;
    nom: string;
    email: string;
}

@Injectable({ providedIn: 'root' })

export class AuthService {
    private usuariActual$ = new BehaviorSubject<Usuari | null>(null);
    estaAutenticat(): boolean {
        return this.usuariActual$.value !== null;
    }
    obtenirUsuari(): Observable<Usuari | null> {
        return this.usuariActual$.asObservable();
    }
    login(email: string, contrasenya: string): boolean {
        if (email === 'erik@midespensa.com' && contrasenya === '12345') {
            this.usuariActual$.next({ id: 1, nom: 'Erik', email });
            return true;
        }
            return false;
        }
    logout(): void {
        this.usuariActual$.next(null);
    }
}