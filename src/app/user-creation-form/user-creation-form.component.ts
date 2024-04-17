import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  styleUrl: './user-creation-form.component.scss'
})
export class UserCreationFormComponent {
form: FormGroup = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  address: new FormControl(''),
  
})
}
