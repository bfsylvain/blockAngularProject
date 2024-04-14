import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillsComponent } from './skills/skills.component';
import { CreateOnomatopoeiaComponentComponent } from './create-onomatopoeia-component/create-onomatopoeia-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    SignUpComponent,
    DeveloperComponent,
    SkillsComponent,
    CreateOnomatopoeiaComponentComponent,
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
