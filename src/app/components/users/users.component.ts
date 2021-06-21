import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  status: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  async getUsers() {
    await this.authService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  deleteUser(user: string) {
    if (confirm('You want to delete this user?')) {
      this.authService
        .deleteUser(user)
        .subscribe(() => (this.status = 'Delete successful'));
      this.getUsers();
    }
  }
}
