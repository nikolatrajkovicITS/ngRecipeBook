import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();       // We created object based on EventEmitter class

  onSelect(feature: string) {
     this.featureSelected.emit(feature);              // We use this property which holds event emitter as a value to emit the event whenever we click one of the buttons.
  }
}
