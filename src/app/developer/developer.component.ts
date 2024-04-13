import { Component } from '@angular/core';
import { Developer } from '../models/classes/developer.class';
import { Skill } from '../models/types/skills.type';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss',
})
export class DeveloperComponent {
  developer1Skill1: Skill = {
    name: 'React',
    logo: 'ReactLogo',
    site: 'React.fr',
  };
  developer1Skill2: Skill = {
    name: 'Angular',
    logo: 'AngularLogo',
    site: 'Angular.fr',
  };

  developer1SkillList: Skill[] = [this.developer1Skill1, this.developer1Skill2];
  
  developer1 = new Developer(
    'Doe',
    'Mouss',
    39,
    "male",
    'I made it',
    this.developer1SkillList
  );
}
