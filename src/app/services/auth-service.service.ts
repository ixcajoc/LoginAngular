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

}