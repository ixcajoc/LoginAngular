import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/type-user.interface';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


// interface User {
//   id: number;
//   user: string;
//   type_user: {
//     type_user_id: number;
//     type: string;
//     active: boolean;
//     description: string;
//   };
// }

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,
    UserCardComponent, 
    HeaderComponent, 
    FooterComponent],
  
    templateUrl: './welcome.component.html',
  // styleUrl: './welcome.component.css'
})
export default class WelcomeComponent implements OnInit{

  usersData: User[] = [];
  constructor(private AuthService: AuthService){}

  
  ngOnInit(): void{
    // this.AuthService.getUsers().subscribe(
    //   (response: User[]) => {
    //     this.usersData = response;
    //   },
    //   (error) => {
    //     console.error('Error al obtener tipos de usuarios:', error);
    //   }
    // );
    this.getUsers();
  }

  getUsers(){
    this.AuthService.getUsers().subscribe({
      next: (response: User[])=> {
        this.usersData = response;
      },
      error: (error) => {error}
    });

  }

}