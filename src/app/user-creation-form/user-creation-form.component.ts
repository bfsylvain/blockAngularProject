import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NewUser } from '../models/types/newUser';

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  styleUrl: './user-creation-form.component.scss',
})
export class UserCreationFormComponent {

  user: NewUser = {
    name: '',
    email: '',
    password: '',
    address: '',
  };
  userForm = this.fb.group({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    // address: new FormControl(''),
    addressGroup: this.fb.group({ /////////////address AVEC 2 points pas de =
      streetNumber: new FormControl(0),
      streetName: new FormControl(''),
      zipCode: new FormControl(0),
      city: new FormControl('')      
    })
  });

  @Output() sendUserToParent: EventEmitter<NewUser> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // this.user = this.form.value;
    console.log(this.userForm.value);
    // this.sendUserToParent.emit(this.user);
  }
}
