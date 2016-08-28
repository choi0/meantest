"use strict";
describe('HomeComponent', function () {
    it('has a title', function () {
        var title = 'Angular 2 Two-Way Binding';
        expect(title).toEqual('Angular 2 Two-Way Binding');
    });
    it('has an example name', function () {
        var example = { name: 'Edit Me to see Two-Way Binding in action.' };
        expect(example.name).toEqual('Edit Me to see Two-Way Binding in action.');
    });
    it('has an array of 3 vehicles', function () {
        var vehicles = [
            { id: 1, name: 'BMW' },
            { id: 2, name: 'TESLA' },
            { id: 3, name: 'CADILLAC' }
        ];
        expect(vehicles.length).toEqual(3);
    });
    it('has a vehicle with an id of 1 and a name of BMW', function () {
        var vehicles = [
            { id: 1, name: 'BMW' },
            { id: 2, name: 'TESLA' },
            { id: 3, name: 'CADILLAC' }
        ];
        expect(vehicles[0].id).toEqual(1);
        expect(vehicles[0].name).toEqual('BMW');
    });
    it('has a vehicle with an id of 2 and a name of TESLA', function () {
        var vehicles = [
            { id: 1, name: 'BMW' },
            { id: 2, name: 'TESLA' },
            { id: 3, name: 'CADILLAC' }
        ];
        expect(vehicles[1].id).toEqual(2);
        expect(vehicles[1].name).toEqual('TESLA');
    });
    it('has a vehicle with an id of 3 and a name of CADILLAC', function () {
        var vehicles = [
            { id: 1, name: 'BMW' },
            { id: 2, name: 'TESLA' },
            { id: 3, name: 'CADILLAC' }
        ];
        expect(vehicles[2].id).toEqual(3);
        expect(vehicles[2].name).toEqual('CADILLAC');
    });
    it('has a messages logging function', function () {
        var messages = [];
        var log = function (msg) { messages.splice(0, 0, msg); };
        log('click');
        expect(messages[0]).toEqual('click');
    });
});
//# sourceMappingURL=home.component.spec.js.map