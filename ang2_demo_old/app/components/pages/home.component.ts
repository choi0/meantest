import { Component } from '@angular/core';
@Component({
  moduleId: module.id, //need this to use relative path
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  vehicles = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'TESLA' },
    { id: 3, name: 'CADILLAC' }
  ];

  title = 'Angular 2 Two-Way Binding';
  example = {name: 'Edit Me to see Two-Way Binding in action.'};

  messages: string[] = [];

  log(msg: string, data: string) {
    this.messages.splice(0, 0, msg);
    console.log(msg);
    if (data) {
      console.log(data);
    }
  }

  clearList(){
    for (var i = 0; i < this.messages.length; i++){
      this.messages.pop();
    }
  }

}
