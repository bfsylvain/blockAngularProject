import { Component } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  name: string = "Doe";
  firstName: string = "Mouss";
  age: number= 39;
  quote: string = "";
  photo: string = "https://randomuser.me/api/portraits/lego/2.jpg";
  displayAge: boolean = false;

  showUserAge() {
    this.displayAge = !this.displayAge;
  }
}
