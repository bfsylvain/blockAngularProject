import { Component } from '@angular/core';
import { Cocktail } from '../models/types/cocktail.type';
import { cocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrl: './cocktail-list-component.component.scss'
})
export class CocktailListComponentComponent {
  cocktailList: Cocktail[]=[]

  constructor(private cocktailService: cocktailService){}
  
  ngOnInit(): void {
    this.getCocktailList()
    console.log(this.cocktailList)
  }

  getCocktailList(): void {
    this.cocktailList = this.cocktailService.getCocktails()
  }
}
