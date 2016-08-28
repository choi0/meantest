import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id, //need this to use relative path
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  directives:[ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    private projectName:string;

    constructor(){
      this.projectName = 'ANGULAR 2';
    }
    
}
