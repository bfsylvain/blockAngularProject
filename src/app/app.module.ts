import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponentComponent,
    CocktailCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
