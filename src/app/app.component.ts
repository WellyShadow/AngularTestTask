import { Component } from '@angular/core';

import { PassTesttaskComponent } from './components/passtesttask/passtesttask.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  password: string = '';
  strength: string = '';
  
  calculateStrength(newPassword: string): void {
    this.password = newPassword;
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
