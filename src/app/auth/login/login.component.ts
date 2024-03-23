import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  async onSubmit(): Promise<void> {
    if (!this.loginForm || this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    try {
      await this.authService.loginWithEmail(email, password);
      this.snackBar.open('Inicio de sesión exitoso', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });

       if (this.authService.isTeacher()){
        // Redirigir al dashboard de profesor
        this.router.navigate(['/teacher']);
      } 
       // Determinar el destino después del inicio de sesión
      if (this.authService.isAdmin()) {
        // Redirigir al dashboard de administrador
        this.router.navigate(['/admin']);
      }
      else{
        this.router.navigate(['/home']);

      }
    } catch (error) {
      this.snackBar.open('Error al iniciar sesión. Verifique sus credenciales e intente nuevamente.', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }
  }
}
