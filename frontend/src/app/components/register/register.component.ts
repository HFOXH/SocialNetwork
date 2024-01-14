import { ConectionService } from './../../service/conection-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public form: FormBuilder, private ConectionService: ConectionService) {
    this.registerForm = this.form.group({
      name: [''],
      email: [''],
      age: [''],
      password: ['']
    });
  }

  ngOnInit(): void {}

  sendData() {
    this.ConectionService.registerUser(this.registerForm.value)
    .subscribe(
      ()=>{
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Usuario registrado correctamente!"
        });
      },
      error =>{
        console.error('Registration error:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error durante el registro. Por favor, inténtalo de nuevo.'
          });
      }
    );
  }
}
