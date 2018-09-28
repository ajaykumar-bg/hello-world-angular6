import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { InputMaskDirective } from './input-mask.directive';
import { InputMaskComponent } from './input-mask/input-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    InputMaskDirective,
    InputMaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputMaskDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
