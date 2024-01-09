import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pass-strength',
  templateUrl: './pass-strength.component.html',
  styleUrl: './pass-strength.component.css'
})
export class PassStrengthComponent {
  @Input() strength: string = '';
}