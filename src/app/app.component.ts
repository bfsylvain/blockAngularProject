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
  playlist: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
  
  onOnomatopeiaList: string[]= [];

  onReceiveNewOnomatopeia(event: string): void {
    this.onOnomatopeiaList.push(event)
    console.log(event)
  }

  ToggleIsAdmin() {
    this.isAdmin = !this.isAdmin
  }
}
