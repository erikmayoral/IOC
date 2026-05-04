import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  contrasenya = '';
  error = '';
  returnUrl = '/preferits';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/preferits';
  }

  onSubmit() {
    const ok = this.authService.login(this.email, this.contrasenya);

    if (ok) {
      this.error = ''; 
      this.router.navigate([this.returnUrl]);
    } else {
      this.error = 'Credenciales incorrectas';
    }
  }
}