import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = false
  isGuestListDisplayed: boolean = true;
  IngredientNecessary: boolean = true;

  ///////////////////// QUEST /////////////////////////
  isAdmin: boolean = false;

  ToggleIsAdmin() {
    this.isAdmin = !this.isAdmin
  }
}
