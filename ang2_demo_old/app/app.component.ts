import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
  <jumbotron></jumbotron>
  <div class="container">
    <router-outlet></router-outlet>
  </div>`,
  directives: [NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent,
    ROUTER_DIRECTIVES]
})
export class AppComponent { }
