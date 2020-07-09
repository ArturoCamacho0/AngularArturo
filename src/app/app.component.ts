import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArturoCamacho';

  menu(){
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');

    var nav = document.getElementById('navigation');
    nav.classList.toggle('active');
  }
}
