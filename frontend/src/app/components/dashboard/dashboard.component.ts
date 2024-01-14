import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConectionService } from '../../service/conection-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId!: number | undefined;
  userDetails: any;
  name: string = '';

  constructor(
    private conectionService: ConectionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userIdString = localStorage.getItem('userId');
    this.userId = userIdString ? +userIdString : undefined;
  
    if (this.userId) {
      this.conectionService.getUserbyId(this.userId).subscribe(
        (response) => {
          this.userDetails = response.result;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    } else {
      console.error('User ID not found in local storage.');
    }
  }
}
