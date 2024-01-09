import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PassTesttaskComponent } from './components/passtesttask/passtesttask.component';
import { InputComponent } from './components/input/input.component';
import { PassStrengthComponent } from './components/pass-strength/pass-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    PassTesttaskComponent,
    InputComponent,
    PassStrengthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
