import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };
  hide = true;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.authService.register(this.user).subscribe(
      (res) => {
        
        localStorage.setItem('role', JSON.stringify(res.savedRoles));
        localStorage.setItem('token', res.token);
        this.router.navigate(['/questions']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
