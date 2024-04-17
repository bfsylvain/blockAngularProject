import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillsComponent } from './skills/skills.component';
import { CreateOnomatopoeiaComponentComponent } from './create-onomatopoeia-component/create-onomatopoeia-component.component';
import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';
import { UserCreationFormComponent } from './user-creation-form/user-creation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    SignUpComponent,
    DeveloperComponent,
    SkillsComponent,
    CreateOnomatopoeiaComponentComponent,
    CocktailListComponentComponent,
    CocktailCardComponent,
    UserCreationFormComponent,
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
