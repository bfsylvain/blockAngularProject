import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  isAdmin: boolean = false;

  ToggleIsAdmin() {
    this.isAdmin = !this.isAdmin
  }
}
