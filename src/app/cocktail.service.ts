import { Injectable } from '@angular/core';
import { cocktailList } from './mocks/mock-cocktails';
import { Cocktail } from './models/types/cocktail.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class cocktailService {

  private _cocktailsUrl: string = 'assets/json/cocktails.json'
  constructor(private httpService: HttpClient) { }

  helloWorld(): string {
    return "hello world !"
  }

  getCocktails(): Cocktail[] {
    return cocktailList
  }

  getCocktailList(): Observable<Cocktail[]> {
    return this.httpService.get<Cocktail[]>(this._cocktailsUrl)
  }
}
