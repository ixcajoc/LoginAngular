<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import LoginComponent from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
}
=======
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import LoginComponent from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
}
>>>>>>> ed1772cfcc1bf866d98e5a5695a9d11872a7cbc2
