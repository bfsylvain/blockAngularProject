import { Component } from '@angular/core';
import { User } from '../models/classes/user.class';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  user1 = new User(
    'Doe',
    'Mouss',
    39,
    'https://randomuser.me/api/portraits/lego/2.jpg'
  );
}
