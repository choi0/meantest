import { Component } from '@angular/core';
@Component({
  moduleId: module.id, //need this to use relative path
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor(){
      this.jbtHeading = 'Angular 2 Demonstration';
      this.jbtText = 'Click Learn More to visit to the official Angular site.'
      this.jbtBtnText = 'Learn More';
      this.jbtBtnUrl = 'https://angular.io/';
    }
}
