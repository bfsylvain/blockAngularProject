import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopoeia-component',
  templateUrl: './create-onomatopoeia-component.component.html',
  styleUrl: './create-onomatopoeia-component.component.scss'
})
export class CreateOnomatopoeiaComponentComponent {
  
  newOnomatopoeia: string = ""

  @Output() sendOnomatopoeiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopeia(): void {
    this.sendOnomatopoeiaToParent.emit(this.newOnomatopoeia)
    this.newOnomatopoeia = ""
  }
}
