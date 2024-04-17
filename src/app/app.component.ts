import { Component } from '@angular/core';
import { cocktailService } from './cocktail.service';
import { NewUser } from './models/types/newUser';
import { FormGroup } from '@angular/forms';
import { NextUser } from './models/classes/nextUser.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = false;
  isGuestListDisplayed: boolean = true;
  IngredientNecessary: boolean = true;

  ///////////////////// QUEST /////////////////////////
  isAdmin: boolean = false;
  playlist: string[] = ['Alejandro', 'Ne me quitte pas', 'Le temps est bon'];
  // onOnomatopeiaList: string[]= [];
  userList: NextUser[] = [];

  constructor(private cocktailService: cocktailService) {}

  onClick() {
    console.log(this.cocktailService.helloWorld());
  }
  ToggleIsAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  // onReceiveNewOnomatopeia(event: string): void {
  //   this.onOnomatopeiaList.push(event)
  //   console.log(event)
  // }

  onReceiveUser(event: NextUser): void {
    this.userList.push(event);
  }
}
