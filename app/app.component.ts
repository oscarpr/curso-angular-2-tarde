import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-light bg-faded">
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" routerLink="/tabla-posiciones">Tablas de posiciones</a>
      </li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}
