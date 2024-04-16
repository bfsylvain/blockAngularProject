import { Injectable } from '@angular/core';
import { cocktailList } from './mocks/mock-cocktails';
import { Cocktail } from './models/types/cocktail.type';

@Injectable({
  providedIn: 'root'
})
export class cocktailService {

  constructor() { }

  helloWorld(): string {
    return "hello world !"
  }

  getCocktails(): Cocktail[] {
    return cocktailList
  }
}
