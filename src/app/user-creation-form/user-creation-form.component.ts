import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    credentials: this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    }),
    addressGroup: this.fb.group({
      streetNumber: new FormControl(0),
      streetName: new FormControl(''),
      zipCode: new FormControl(0),
      city: new FormControl(''),
    }),
  });

  @Output() sendUserToParent: EventEmitter<NextUser> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.userForm.value)
    const user: NextUser = new NextUser(
      this.userForm.getRawValue().name,
      this.userForm.getRawValue().credentials.email,
      this.userForm.getRawValue().credentials.password,
      this.userForm.getRawValue().addressGroup
    );
    this.sendUserToParent.emit(user);
  }
}
