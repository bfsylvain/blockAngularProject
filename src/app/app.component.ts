import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onOnomatopeiaList: string[]= [];

  onReceiveNewOnomatopeia(event: string): void {
    this.onOnomatopeiaList.push(event)
    console.log(event)
  }

}
