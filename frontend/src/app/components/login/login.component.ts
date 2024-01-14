import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConectionService } from './../../service/conection-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private conectionService: ConectionService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    const credentials = this.loginForm.value;
    this.conectionService.login(credentials).subscribe(
      response => {
        localStorage.setItem("userId",response.result.userId);
        this.router.navigate(['/dashboard']); 
      },
      (error) => {
        console.error('Registration error:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error inesperado. Inténtalo de nuevo.'
          });
      }
    );
  }

}
