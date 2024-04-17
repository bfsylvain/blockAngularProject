import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewUser } from '../models/types/newUser';

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  styleUrl: './user-creation-form.component.scss',
})
export class UserCreationFormComponent {
  user: NewUser = {
    name:"",
    email:"",
    password:"",
    address:""
  };
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    addressNumber: new FormControl(''),
    address: new FormControl(''),
    zipCode: new FormControl(''),
  });

  onClick() {
    const formData = this.form.value;
  }
}
