import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private authService: AuthService, private router: Router) {}
  user = { email: '', password: '' };
  ngOnInit(): void {}

  login() {
    this.authService.login(this.user).subscribe(
      (res) => {
        localStorage.setItem('role', JSON.stringify(res.userRoles));
        localStorage.setItem('token', res.token);
        this.router.navigate(['/questions']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
