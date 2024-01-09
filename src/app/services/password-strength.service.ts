import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  constructor() { }

  checkPasswordStrength(password: string): string {
    const pass = password.trim();
    if (pass.length === 0) {
      return 'empty';
    } else if (pass.length < 8) {
      return 'notenough';
    } else {
      const hasLetters = /[a-zA-Z]/.test(pass);
      const hasNumbers = /\d/.test(pass);
      const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass);

      if (hasLetters && hasNumbers && hasSymbols) {
        return 'strong';
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        return 'medium';
      } else {
        return 'easy';
      }
    }
  }
}