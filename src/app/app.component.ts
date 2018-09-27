import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  users = [
    {id: 1, name: 'Ajay Kumar BG'},
    {id: 2, name: 'Manu Sitara'},
    {id: 3, name: 'Mufsir AK'}
  ];

  showBgColor = true;
  name = 'ajay kumar bg';

  constructor() {
  }

  changeBGColor() {
    this.showBgColor = !this.showBgColor;
  }
}
