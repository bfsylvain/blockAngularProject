import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NewUser } from '../models/types/newUser';
import { Address } from '../models/classes/address.class';
import { NextUser } from '../models/classes/nextUser.class';

@Component({
  selector: 'app-user-creation-form',
  templateUrl: './user-creation-form.component.html',
  styleUrl: './user-creation-form.component.scss',
})
export class UserCreationFormComponent {
  address!: Address;

  userForm: FormGroup = this.fb.group({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    // address: new FormControl(''),
    addressGroup: this.fb.group({
      /////////////address AVEC 2 points pas de =
      streetNumber: new FormControl(0),
      streetName: new FormControl(''),
      zipCode: new FormControl(0),
      city: new FormControl(''),
    }),
  });

  @Output() sendUserToParent: EventEmitter<NextUser> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // this.user = this.form.value;
    const user: NextUser = new NextUser(
      this.userForm.getRawValue().name,
      this.userForm.getRawValue().email,
      this.userForm.getRawValue().password,
      this.userForm.getRawValue().addressGroup
    );
    console.log(typeof this.userForm.value);
    this.sendUserToParent.emit(user);
  }
}
