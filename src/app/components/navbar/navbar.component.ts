import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, Usuari } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  usuari$: Observable<Usuari | null>;

  constructor(public authService: AuthService) {
    this.usuari$ = this.authService.obtenirUsuari();
  }

  logout() {
    this.authService.logout();
  }
}