import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeveloperComponent } from './developer/developer.component';
import { SkillsComponent } from './skills/skills.component';
import { CreateOnomatopoeiaComponentComponent } from './create-onomatopoeia-component/create-onomatopoeia-component.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';
import { UserCreationFormComponent } from './user-creation-form/user-creation-form.component';
import { AddressPipe } from './address.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    DeveloperComponent,
    SkillsComponent,
    CreateOnomatopoeiaComponentComponent,
    CocktailListComponentComponent,
    CocktailCardComponent,
    UserCreationFormComponent,
    AddressPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
