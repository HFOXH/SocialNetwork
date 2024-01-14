import { ConectionService } from './../../service/conection-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private ConectionService: ConectionService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.ConectionService.getAllPosts().subscribe(
      (response: any) => { // Asegúrate de que response sea de tipo any
        console.log(response);
        this.posts = response.result || [];
      },
      error => {
        console.error('Error al obtener los posts:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al obtener los posts. Por favor, inténtalo de nuevo.'
        });
      }
    );
  }
}
