import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showBgColor = true;
  title = 'hello-world';

  constructor() {
  }

  changeBGColor() {
    this.showBgColor = !this.showBgColor;
  }
}
