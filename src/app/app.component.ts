import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exe_angular_15';
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About us', url: '/about-us', icon: 'business' },
  ];
}
