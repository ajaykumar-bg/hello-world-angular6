import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBgColor = true;
  name = 'Ajay kumar bg';

  constructor() {
  }

  changeBGColor() {
    this.showBgColor = !this.showBgColor;
  }
}
