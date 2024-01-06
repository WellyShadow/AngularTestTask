import { Component } from '@angular/core';

@Component({
  selector: 'app-passtesttask',
  templateUrl: './passtesttask.component.html',
  styleUrls: ['./passtesttask.component.css']
})
export class PassTesttaskComponent {
  password: string = '';
  strength: string = '';
  
  calculateStrength(): void {
    const pass = this.password.trim();
    if (pass.length === 0) {
      this.strength = 'empty';
    } else if (pass.length < 8) {
      this.strength = 'notenough';
    } else {
      const hasLetters = /[a-zA-Z]/.test(pass);
      const hasNumbers = /\d/.test(pass);
      const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass);

      if (hasLetters && hasNumbers && hasSymbols) {
        this.strength = 'strong';
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        this.strength = 'medium';
      } else {
        this.strength = 'easy';
      }
    }
  }
}