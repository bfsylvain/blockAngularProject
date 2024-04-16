import { Component, Input } from '@angular/core';
import { Cocktail } from '../models/types/cocktail.type';
@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss'
})
export class CocktailCardComponent {
  @Input() cocktail?: Cocktail;
  @Input() index?: number;


}
