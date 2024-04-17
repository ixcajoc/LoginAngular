<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { NewUser } from '../interfaces/new-user.interface';
import { Observable, of } from 'rxjs';
import { MessageService } from './message-service.service';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    private router: Router,
    private message: MessageService,

  ) {}
   
  getToken() {
    return localStorage.getItem('token');
  }
  
  setToken(token:string): void {
    localStorage.setItem('token', token);
  }
  
  getCurrentUser(): any {
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      return JSON.parse(currentUserString);
    }
    return null;
  }

  
  auth(post: UserLogin ){
    
    return this.http.post<any>(`${this.apiUrl}/auth/login`,post).subscribe({
      next: (response)=> {
        
        this.setToken(response.response.token);
        this.router.navigate(['/welcome']);
        
      },
      error: (error) => {
        error;
        // alert(error.error.message);
        this.message.errorAlert(error.error.message);
      }
      
    }); 
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token); // Decodifico el token
      localStorage.setItem('currentUser', JSON.stringify(decodedToken));

      const expirationDate = new Date(decodedToken.exp * 1000); // Multiplico por 1000 para convertir a milisegundos
      return expirationDate > new Date(); // true or false
    }
    return false;
  }
    // Darle ojo a estos metodos

  // login(post: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, post);
  // }

  getUsers(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${this.getToken()}`,
  
    });

    return this.http.get(`${this.apiUrl}/users`, { headers });
  }

  getUserByid(id:number): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${this.getToken()}`,
  
    });
    return this.http.get(`${this.apiUrl}/users/${id}`, { headers });
 
  }

  GetTypesUsers(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${this.getToken()}`,
    });
    return this.http.get(`${this.apiUrl}/users/types`, { headers });

  }

  newUser(newUser: NewUser ){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${this.getToken()}`

    });
      
    return this.http.post<any>(`${this.apiUrl}/users/types`,newUser, {headers}).subscribe({
        next: (response)=> {
          response;
          this.message.successAlert();
          this.router.navigate(['/welcome']);
        },
        error: (error) => {
          error;
          this.message.errorAlert(error.error.message);

        }
      });
    
  }

=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser, UserLogin } from '../interfaces/user.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.kars.devmanual.online/api/v1/auth/login';
  private urlUsers = 'https://api.kars.devmanual.online/api/v1/users';
  private urlUsersTypes = 'https://api.kars.devmanual.online/api/v1/users/types';


  // private token: string | null = null;
  
  constructor(private http: HttpClient,private router: Router) {}

  

  getToken() {
    return localStorage.getItem('token');
  }
  
  setToken(token:string): void {
    localStorage.setItem('token', token);
  }


  auth(post: UserLogin ){
    
    return this.http.post<any>(this.apiUrl,post).subscribe({
        next: (response)=> {
          this.setToken(response.response.token);
          this.router.navigate(['/welcome']);
          
        },
        error: (error) => {error}
      });
    
  }

  getUsers(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${this.getToken()}`
      // 'access_token': `$Barer {this.getToken()}`
  
    });

    return this.http.get(this.urlUsers, { headers });
  }

  GetTypesUsers(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${this.getToken()}`
      // 'access_token': `$Barer {this.getToken()}`


    });
    return this.http.get(this.urlUsersTypes, { headers });

  }

  newUser(newUser: NewUser ){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': `${this.getToken()}`

    });
      
    return this.http.post<any>(this.urlUsers,newUser, {headers}).subscribe({
        next: (response)=> {response},
        error: (error) => {error}
      });
    
  }


  // removeToken() {
  //   let accessToken = localStorage.getItem('token');
  //   const url_api = `https://api.kars.devmanual.online/api/v1/auth/loginapi/v1/users=${accessToken}`;
  //   localStorage.removeItem('token');
  // }

>>>>>>> ed1772cfcc1bf866d98e5a5695a9d11872a7cbc2
}