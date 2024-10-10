import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent, NgFor, RouterLink, RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];
}
