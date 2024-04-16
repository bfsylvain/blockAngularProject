import { Component, inject } from '@angular/core';
import { cocktailService } from './cocktail.service';

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
  constructor(private cocktailService: cocktailService){}
  onClick(){
    console.log(this.cocktailService.helloWorld())
  }
  

  onReceiveNewOnomatopeia(event: string): void {
    this.onOnomatopeiaList.push(event)
    console.log(event)
  }

  ToggleIsAdmin() {
    this.isAdmin = !this.isAdmin
  }
}
