"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HomeComponent = (function () {
    function HomeComponent() {
        this.vehicles = [
            { id: 1, name: 'BMW' },
            { id: 2, name: 'TESLA' },
            { id: 3, name: 'CADILLAC' }
        ];
        this.title = 'Angular 2 Two-Way Binding';
        this.example = { name: 'Edit Me to see Two-Way Binding in action.' };
        this.messages = [];
    }
    HomeComponent.prototype.log = function (msg, data) {
        this.messages.splice(0, 0, msg);
        console.log(msg);
        if (data) {
            console.log(data);
        }
    };
    HomeComponent.prototype.clearList = function () {
        for (var i = 0; i < this.messages.length; i++) {
            this.messages.pop();
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map