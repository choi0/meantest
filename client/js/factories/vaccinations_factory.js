/**
 * Created by dchoi1 on 8/1/2016.
 */

angular.module('myApp')
  .factory('VaccinationsFactory', function InboxFactory ($q, $http, $location) {
    'use strict';
    var exports = {};


    exports.getMessages = function (countryName) {
      return $http({
        url: 'https://api.tugroup.com/v1/travelsafe/countries/' + countryName.id,
        headers: {'X-Auth-API-Key': '2ym8f38sxsx85zc22mzytq5a'},
        method: 'GET'
      });
    };

    return exports;

    /*

     exports.getMessages = function (countryName) {
     return $http({
     url:'https://api.tugroup.com/v1/travelsafe/countries/ar',
     headers: { 'X-Auth-API-Key': '2ym8f38sxsx85zc22mzytq5a'},
     method: 'GET'
     });

     return exports;
     };


     */
    /*
     exports.getMessages = function (countryName) {
     return $http.get('json/'+countryName )
     //return $http.get('json/test.json')
     .error(function (data) {
     console.log('There was an error!', data);
     });
     };
     return exports;
     */

  });
