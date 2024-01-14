import { ConectionService } from './../../service/conection-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  registerPostForm: FormGroup;

  constructor(public form: FormBuilder, private ConectionService: ConectionService, private router: Router) {
    this.registerPostForm = this.form.group({
      userId: [''],
      title: [''],
      content: ['']
    });
    const storedId = localStorage.getItem('userId');
    if (storedId) {
      this.registerPostForm.patchValue({ userId: parseInt(storedId, 10) });
    }
  }

  ngOnInit(): void {}

  sendData() {
    this.ConectionService.addNewPost(this.registerPostForm.value)
    .subscribe(
      ()=>{
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Post registrado correctamente!"
        });
        this.router.navigate(['/posts']);
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
