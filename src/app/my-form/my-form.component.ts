import { Component } from '@angular/core';
import { Order } from '../models/types/order.type';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss',
})
export class MyFormComponent {

  newOrder: Order = {
    title: '',
    quantity: 0,
    date: new Date(),
    contact: '',
  };

  onSubmit() {
    console.log(this.newOrder);
  }
}
