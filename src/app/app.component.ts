import { Component } from '@angular/core';
import { PasswordStrengthService } from './services/password-strength.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  strength: string = '';
  
  constructor(private passwordStrengthService: PasswordStrengthService) {}

  calculateStrength(newPassword: string): void {
    this.strength = this.passwordStrengthService.checkPasswordStrength(newPassword);
  }
}
