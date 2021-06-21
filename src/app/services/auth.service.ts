import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:4040/api';

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any) {
    return this.http.post<any>(this.URL + '/auth/register', user);
  }

  login(user: any) {
    return this.http.post<any>(this.URL + '/auth/login', user);
  }

  logged() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
  roleMatch(role: String): boolean {
    const roles = JSON.parse(localStorage.getItem('role')!);

    if (!roles) return false;
    for (let i = 0; i < roles.length; i++) {
      if (role === roles[i].name) return true;
    }
    return false;
  }
  getUsers() {
    return this.http.get<any>(this.URL + '/users');
  }
  deleteUser(user: string) {
    return this.http.delete<any>(this.URL + '/users/delete/' + user);
  }
}
