import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export default class WelcomeComponent {

  constructor(private AuthService: AuthService){}

  // removeToken(){
  //   this.AuthService.removeToken();
  // }

}
