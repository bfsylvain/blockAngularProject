import { Component, Input } from '@angular/core';
import { Skill } from '../models/types/skills.type';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {
  
  ngOnInit(): void {
    console.log(this.developer1SkillList)
  }
     @Input() developer1SkillList?: Skill[]= [];

}
