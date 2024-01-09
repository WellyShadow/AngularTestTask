import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Output() passwordChange = new EventEmitter<string>();
  password: string = '';

  onInputChange(): void {
    this.passwordChange.emit(this.password);
  }
}
