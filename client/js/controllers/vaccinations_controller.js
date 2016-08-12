/**
 * Created by dchoi1 on 8/1/2016.
 */

angular.module('myApp')
    .controller('VaccinationsCtrl', function($scope, VaccinationsFactory) {
          console.log('VaccinationsCtrl');

        $scope.displayedCountries = [];
        $scope.displayedVaccines = [];
        /*
        $scope.displayedVaccines =[{
            "category": "Yellow Fever Vaccination",
            "description": "Yellow fever is a disease caused by a flavivirus from the bite of an infected mosquito.Travellers get vaccinated either because it is required to enter a country or because it is recommended for their protection.About Yellow FeverYellow Fever Vaccination Centres in Canada"
        }, {
            "category": "Hepatitis B",
            "description": "Hepatitis B is a disease of the liver spread through blood or other bodily fluids. Travellers who may be exposed (e.g., through sexual contact, medical treatment, sharing needles, tattooing, acupuncture or occupational exposure) should get vaccinated."
        }, {
            "category": "Influenza",
            "description": "\n\tSeasonal influenza occurs worldwide. The flu season usually runs from November to April in the northern hemisphere, between April and October in the southern hemisphere and year round in the tropics. Influenza (flu) is caused by a virus spread from person to person when they cough or sneeze or by touching objects and surfaces that have been contaminated with the virus. Get the flu shot."
        }, {
            "category": "Measles",
            "description": "Measles is a highly contagious viral disease and is common in most parts of the world. Be sure your measles vaccination is up-to-date regardless of your travel destination."
        }];

        */
        /*VaccinationsFactory.getMessages("ugh")
            .success(function(jsonData, statusCode){
                console.log('The request was successful!', statusCode);
                console.dir(jsonData);

                // Now add the vaccines
               // $scope.displayedVaccines = {category: jsonData}  ;


                $scope.data = {
                    emails: jsonData
                };
            });

          /*
           VaccinationsFactory.getMessages()
           .success(function(jsonData, statusCode){
           console.log('The request was successful!', statusCode);
           console.dir(jsonData);
           // Now add the Email messages to the controller's scope
           $scope.data = {
           emails: jsonData
           };
           });
           */

          //country was clicked, add/remove infomation from displayedCountries. Use VaccinationsFactory.getMessages()
          $scope.showDetails = function(country){

            // if we only want to display one country maximum in the list

            /*  if($scope.displayedCountries.length==0) {
             $scope.displayedCountries.push(country);
             } else if($scope.displayedCountries.indexOf(country) == -1){
             $scope.displayedCountries.splice(0,1);
             $scope.displayedCountries.push(country);
             } else {
             $scope.displayedCountries.splice(0,1);
             }


             */
            //if the country is not in displayedCountries
            if($scope.displayedCountries.indexOf(country) == -1) {
              $scope.displayedCountries.push(country);
              //console.log(country.englishName +' added');

              $scope.addVaccines();
            } else {
              $scope.displayedCountries.splice( $scope.displayedCountries.indexOf(country), 1 );
              //console.log(country.englishName +' deleted');
              $scope.updateVaccines();
            }

          };

      $scope.removeDetails = function(country) {
        $scope.displayedCountries.splice( $scope.displayedCountries.indexOf(country), 1 );
        //console.log(country.englishName +' deleted');
        $scope.updateVaccines();
      };

      $scope.updateVaccines = function() {
        $scope.displayedVaccines = [];
        for(i = 0;i<$scope.displayedCountries.length;i++) {
          VaccinationsFactory.getMessages($scope.displayedCountries[i])
            .success(function(jsonData, statusCode){
              //console.log('The request was successful!', statusCode);
              //console.dir(jsonData);
              jsonData = jsonData.health.diseasesAndVaccinesInfo.Vaccines;                //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              //console.dir(jsonData);
              for(i=0; i<jsonData.length; i++) {

                var copyDoesNotExist = true;
                for (j = 0; j < $scope.displayedVaccines.length; j++) {
                  if ($scope.displayedVaccines[j].category === jsonData[i].category) {
                    copyDoesNotExist = false;
                  }
                }
                if (copyDoesNotExist)
                {

                  //console.log("adding "+jsonData[i].category +" AND THE INDEX IS " + $scope.displayedVaccines.indexOf(jsonData[i]) + "   ASDFHAISDF");
                  if(jsonData[i].category === "Routine Vaccines" || jsonData[i].category === "Vaccines to Consider") {

                  } else {
                      $scope.displayedVaccines.push(jsonData[i]);
                  }
                } else {
                  //console.log("SHOULD I NBE HERE?");
                }

              }
            });
        }
      };




      $scope.addVaccines = function() {
        for(i = 0;i<$scope.displayedCountries.length;i++) {
          VaccinationsFactory.getMessages($scope.displayedCountries[i])
            .success(function(jsonData, statusCode){
              //console.log('The request was successful!', statusCode);
              //console.dir(jsonData);
              jsonData = jsonData.health.diseasesAndVaccinesInfo.Vaccines;                //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
              //console.dir(jsonData);
              for(i=0; i<jsonData.length; i++) {

                var copyDoesNotExist = true;
                for (j = 0; j < $scope.displayedVaccines.length; j++) {
                  if ($scope.displayedVaccines[j].category === jsonData[i].category) {
                    copyDoesNotExist = false;
                  }
                }
                if (copyDoesNotExist)
                {

                  //console.log("adding "+jsonData[i].category +" AND THE INDEX IS " + $scope.displayedVaccines.indexOf(jsonData[i]) + "   ASDFHAISDF");
                    if(jsonData[i].category === "Routine Vaccines" || jsonData[i].category === "Vaccines to Consider") {

                    } else {
                        $scope.displayedVaccines.push(jsonData[i]);
                    }
                } else {
                  //console.log("SHOULD I NBE HERE?");
                }

              }
            });
        }
      };
        /*
          $scope.addToVaccines = function(countryName){
            VaccinationsFactory.getMessages(countryName)
                .success(function(jsonData, statusCode){
                  console.log('The request was successful!', statusCode);
                  console.dir(jsonData);

                  // Now add the vaccines
                  //$scope.displayedVaccines.push(jsonData[0]);
                    for(i=0; i<jsonData.length; i++){
                        if($scope.displayedVaccines.indexOf(jsonData[i]) == -1) {
                            $scope.displayedVaccines.push(jsonData[i]);
                            console.log(jsonData[$scope.displayedVaccines.indexOf(jsonData[i])]);
                        }
                        console.log(jsonData[$scope.displayedVaccines.indexOf(jsonData[i])]);
                    }


                    for(i=0; i<$scope.displayedVaccines.length; i++){
                        console.log("HEREHERHE "+$scope.displayedVaccines[i].category+" at "+i);
                    }
/*

                    $scope.displayedVaccines =[{
                        "category": "Yellow Fever Vaccination",
                        "description": "Yellow fever is a disease caused by a flavivirus from the bite of an infected mosquito.Travellers get vaccinated either because it is required to enter a country or because it is recommended for their protection.About Yellow FeverYellow Fever Vaccination Centres in Canada"
                    }, {
                        "category": "Hepatitis B",
                        "description": "Hepatitis B is a disease of the liver spread through blood or other bodily fluids. Travellers who may be exposed (e.g., through sexual contact, medical treatment, sharing needles, tattooing, acupuncture or occupational exposure) should get vaccinated."
                    }, {
                        "category": "Influenza",
                        "description": "\n\tSeasonal influenza occurs worldwide. The flu season usually runs from November to April in the northern hemisphere, between April and October in the southern hemisphere and year round in the tropics. Influenza (flu) is caused by a virus spread from person to person when they cough or sneeze or by touching objects and surfaces that have been contaminated with the virus. Get the flu shot."
                    }, {
                        "category": "Measles",
                        "description": "Measles is a highly contagious viral disease and is common in most parts of the world. Be sure your measles vaccination is up-to-date regardless of your travel destination."
                    }];

                });
          };
*/
          $scope.countries =
              [{
                "englishName": "Andorra",
                "id": "AD",
                "frenchName": "Andorre"
              }, {
                "englishName": "United Arab Emirates",
                "id": "AE",
                "frenchName": "Émirats arabes unis"
              }, {
                "englishName": "Afghanistan",
                "id": "AF",
                "frenchName": "Afghanistan"
              }, {
                "englishName": "Antigua and Barbuda",
                "id": "AG",
                "frenchName": "Antigua-et-Barbuda"
              }, {
                "englishName": "Anguilla",
                "id": "AI",
                "frenchName": "Anguilla"
              }, {
                "englishName": "Albania",
                "id": "AL",
                "frenchName": "Albanie"
              }, {
                "englishName": "Armenia",
                "id": "AM",
                "frenchName": "Arménie"
              }, {
                "englishName": "Angola",
                "id": "AO",
                "frenchName": "Angola"
              }, {
                "englishName": "Antarctica",
                "id": "AQ",
                "frenchName": "Antarctique"
              }, {
                "englishName": "Argentina",
                "id": "AR",
                "frenchName": "Argentine"
              }, {
                "englishName": "American Samoa",
                "id": "AS",
                "frenchName": "Samoa américaines"
              }, {
                "englishName": "Austria",
                "id": "AT",
                "frenchName": "Autriche"
              }, {
                "englishName": "Australia",
                "id": "AU",
                "frenchName": "Australie"
              }, {
                "englishName": "Aruba",
                "id": "AW",
                "frenchName": "Aruba"
              }, {
                "englishName": "Azerbaijan",
                "id": "AZ",
                "frenchName": "Azerbaïdjan"
              }, {
                "englishName": "Bosnia and Herzegovina",
                "id": "BA",
                "frenchName": "Bosnie-Herzégovine"
              }, {
                "englishName": "Barbados",
                "id": "BB",
                "frenchName": "Barbade"
              }, {
                "englishName": "Bangladesh",
                "id": "BD",
                "frenchName": "Bangladesh"
              }, {
                "englishName": "Belgium",
                "id": "BE",
                "frenchName": "Belgique"
              }, {
                "englishName": "Burkina Faso",
                "id": "BF",
                "frenchName": "Burkina Faso"
              }, {
                "englishName": "Bulgaria",
                "id": "BG",
                "frenchName": "Bulgarie"
              }, {
                "englishName": "Bahrain",
                "id": "BH",
                "frenchName": "Bahreïn"
              }, {
                "englishName": "Burundi",
                "id": "BI",
                "frenchName": "Burundi"
              }, {
                "englishName": "Benin",
                "id": "BJ",
                "frenchName": "Bénin"
              }, {
                "englishName": "Saint-Barthélemy",
                "id": "BL",
                "frenchName": "Saint-Barthélemy"
              }, {
                "englishName": "Bermuda",
                "id": "BM",
                "frenchName": "Bermudes"
              }, {
                "englishName": "Brunei Darussalam",
                "id": "BN",
                "frenchName": "Brunéi Darussalam"
              }, {
                "englishName": "Bolivia",
                "id": "BO",
                "frenchName": "Bolivie"
              }, {
                "englishName": "Bonaire",
                "id": "BQ",
                "frenchName": "Bonaire"
              }, {
                "englishName": "Brazil",
                "id": "BR",
                "frenchName": "Brésil"
              }, {
                "englishName": "Bahamas",
                "id": "BS",
                "frenchName": "Bahamas"
              }, {
                "englishName": "Bhutan",
                "id": "BT",
                "frenchName": "Bhoutan"
              }, {
                "englishName": "Botswana",
                "id": "BW",
                "frenchName": "Botswana"
              }, {
                "englishName": "Belarus",
                "id": "BY",
                "frenchName": "Bélarus"
              }, {
                "englishName": "Belize",
                "id": "BZ",
                "frenchName": "Belize"
              }, {
                "englishName": "Democratic Republic of Congo (Kinshasa)",
                "id": "CD",
                "frenchName": "République démocratique du Congo (Kinshasa)"
              }, {
                "englishName": "Central African Republic",
                "id": "CF",
                "frenchName": "République centrafricaine"
              }, {
                "englishName": "Republic of Congo (Brazzaville)",
                "id": "CG",
                "frenchName": "République du Congo (Brazzaville)"
              }, {
                "englishName": "Switzerland",
                "id": "CH",
                "frenchName": "Suisse"
              }, {
                "englishName": "Côte d\u0027Ivoire (Ivory Coast)",
                "id": "CI",
                "frenchName": "Côte d\u0027Ivoire"
              }, {
                "englishName": "Cook Islands",
                "id": "CK",
                "frenchName": "Îles Cook"
              }, {
                "englishName": "Chile",
                "id": "CL",
                "frenchName": "Chili"
              }, {
                "englishName": "Cameroon",
                "id": "CM",
                "frenchName": "Cameroun"
              }, {
                "englishName": "China",
                "id": "CN",
                "frenchName": "Chine"
              }, {
                "englishName": "Colombia",
                "id": "CO",
                "frenchName": "Colombie"
              }, {
                "englishName": "Costa Rica",
                "id": "CR",
                "frenchName": "Costa Rica"
              }, {
                "englishName": "Cuba",
                "id": "CU",
                "frenchName": "Cuba"
              }, {
                "englishName": "Cabo Verde",
                "id": "CV",
                "frenchName": "Cabo Verde"
              }, {
                "englishName": "Curaçao",
                "id": "CW",
                "frenchName": "Curaçao"
              }, {
                "englishName": "Cyprus",
                "id": "CY",
                "frenchName": "Chypre"
              }, {
                "englishName": "Czech Republic",
                "id": "CZ",
                "frenchName": "République tchèque"
              }, {
                "englishName": "Germany",
                "id": "DE",
                "frenchName": "Allemagne"
              }, {
                "englishName": "Djibouti",
                "id": "DJ",
                "frenchName": "Djibouti"
              }, {
                "englishName": "Denmark",
                "id": "DK",
                "frenchName": "Danemark"
              }, {
                "englishName": "Dominica",
                "id": "DM",
                "frenchName": "Dominique"
              }, {
                "englishName": "Dominican Republic",
                "id": "DO",
                "frenchName": "République dominicaine"
              }, {
                "englishName": "Algeria",
                "id": "DZ",
                "frenchName": "Algérie"
              }, {
                "englishName": "Ecuador",
                "id": "EC",
                "frenchName": "Équateur"
              }, {
                "englishName": "Estonia",
                "id": "EE",
                "frenchName": "Estonie"
              }, {
                "englishName": "Egypt",
                "id": "EG",
                "frenchName": "Égypte"
              }, {
                "englishName": "Eritrea",
                "id": "ER",
                "frenchName": "Érythrée"
              }, {
                "englishName": "Spain",
                "id": "ES",
                "frenchName": "Espagne"
              }, {
                "englishName": "Ethiopia",
                "id": "ET",
                "frenchName": "Éthiopie"
              }, {
                "englishName": "Finland",
                "id": "FI",
                "frenchName": "Finlande"
              }, {
                "englishName": "Fiji",
                "id": "FJ",
                "frenchName": "Fidji"
              }, {
                "englishName": "Falkland Islands",
                "id": "FK",
                "frenchName": "Îles Malouines"
              }, {
                "englishName": "Micronesia (FSM)",
                "id": "FM",
                "frenchName": "Micronésie (EFM)"
              }, {
                "englishName": "France",
                "id": "FR",
                "frenchName": "France"
              }, {
                "englishName": "Gabon",
                "id": "GA",
                "frenchName": "Gabon"
              }, {
                "englishName": "United Kingdom",
                "id": "GB",
                "frenchName": "Royaume-Uni"
              }, {
                "englishName": "Grenada",
                "id": "GD",
                "frenchName": "Grenade"
              }, {
                "englishName": "Georgia",
                "id": "GE",
                "frenchName": "Géorgie"
              }, {
                "englishName": "French Guiana",
                "id": "GF",
                "frenchName": "Guyane française"
              }, {
                "englishName": "Ghana",
                "id": "GH",
                "frenchName": "Ghana"
              }, {
                "englishName": "Gibraltar",
                "id": "GI",
                "frenchName": "Gibraltar"
              }, {
                "englishName": "Greenland",
                "id": "GL",
                "frenchName": "Groenland"
              }, {
                "englishName": "Gambia, The",
                "id": "GM",
                "frenchName": "Gambie"
              }, {
                "englishName": "Guinea",
                "id": "GN",
                "frenchName": "Guinée"
              }, {
                "englishName": "Guadeloupe",
                "id": "GP",
                "frenchName": "Guadeloupe"
              }, {
                "englishName": "Equatorial Guinea",
                "id": "GQ",
                "frenchName": "Guinée équatoriale"
              }, {
                "englishName": "Greece",
                "id": "GR",
                "frenchName": "Grèce"
              }, {
                "englishName": "Guatemala",
                "id": "GT",
                "frenchName": "Guatemala"
              }, {
                "englishName": "Guam",
                "id": "GU",
                "frenchName": "Guam"
              }, {
                "englishName": "Guinea-Bissau",
                "id": "GW",
                "frenchName": "Guinée-Bissau"
              }, {
                "englishName": "Guyana",
                "id": "GY",
                "frenchName": "Guyana"
              }, {
                "englishName": "Hong Kong",
                "id": "HK",
                "frenchName": "Hong Kong"
              }, {
                "englishName": "Honduras",
                "id": "HN",
                "frenchName": "Honduras"
              }, {
                "englishName": "Croatia",
                "id": "HR",
                "frenchName": "Croatie"
              }, {
                "englishName": "Haiti",
                "id": "HT",
                "frenchName": "Haïti"
              }, {
                "englishName": "Hungary",
                "id": "HU",
                "frenchName": "Hongrie"
              }, {
                "englishName": "Canary Islands",
                "id": "IC",
                "frenchName": "Îles Canaries"
              }, {
                "englishName": "Indonesia",
                "id": "ID",
                "frenchName": "Indonésie"
              }, {
                "englishName": "Ireland",
                "id": "IE",
                "frenchName": "Irlande"
              }, {
                "englishName": "Israel, the West Bank and the Gaza Strip",
                "id": "IL",
                "frenchName": "Israël, la Cisjordanie et la bande de Gaza"
              }, {
                "englishName": "India",
                "id": "IN",
                "frenchName": "Inde"
              }, {
                "englishName": "Iraq",
                "id": "IQ",
                "frenchName": "Iraq"
              }, {
                "englishName": "Iran",
                "id": "IR",
                "frenchName": "Iran"
              }, {
                "englishName": "Iceland",
                "id": "IS",
                "frenchName": "Islande"
              }, {
                "englishName": "Italy",
                "id": "IT",
                "frenchName": "Italie"
              }, {
                "englishName": "Jamaica",
                "id": "JM",
                "frenchName": "Jamaïque"
              }, {
                "englishName": "Jordan",
                "id": "JO",
                "frenchName": "Jordanie"
              }, {
                "englishName": "Japan",
                "id": "JP",
                "frenchName": "Japon"
              }, {
                "englishName": "Kenya",
                "id": "KE",
                "frenchName": "Kenya"
              }, {
                "englishName": "Kyrgyz Republic",
                "id": "KG",
                "frenchName": "République kirghize"
              }, {
                "englishName": "Cambodia",
                "id": "KH",
                "frenchName": "Cambodge"
              }, {
                "englishName": "Kiribati",
                "id": "KI",
                "frenchName": "Kiribati"
              }, {
                "englishName": "Comoros",
                "id": "KM",
                "frenchName": "Comores"
              }, {
                "englishName": "Saint Kitts and Nevis",
                "id": "KN",
                "frenchName": "Saint-Kitts-et-Nevis"
              }, {
                "englishName": "Korea, North (DPRK)",
                "id": "KP",
                "frenchName": "Corée, Nord (RPDC)"
              }, {
                "englishName": "Korea, South",
                "id": "KR",
                "frenchName": "Corée, Sud"
              }, {
                "englishName": "Kuwait",
                "id": "KW",
                "frenchName": "Koweït"
              }, {
                "englishName": "Cayman Islands",
                "id": "KY",
                "frenchName": "Îles Caïmans"
              }, {
                "englishName": "Kazakhstan",
                "id": "KZ",
                "frenchName": "Kazakhstan"
              }, {
                "englishName": "Laos",
                "id": "LA",
                "frenchName": "Laos"
              }, {
                "englishName": "Lebanon",
                "id": "LB",
                "frenchName": "Liban"
              }, {
                "englishName": "Saint Lucia",
                "id": "LC",
                "frenchName": "Sainte-Lucie"
              }, {
                "englishName": "Liechtenstein",
                "id": "LI",
                "frenchName": "Liechtenstein"
              }, {
                "englishName": "Sri Lanka",
                "id": "LK",
                "frenchName": "Sri Lanka"
              }, {
                "englishName": "Liberia",
                "id": "LR",
                "frenchName": "Libéria"
              }, {
                "englishName": "Lesotho",
                "id": "LS",
                "frenchName": "Lesotho"
              }, {
                "englishName": "Lithuania",
                "id": "LT",
                "frenchName": "Lituanie"
              }, {
                "englishName": "Luxembourg",
                "id": "LU",
                "frenchName": "Luxembourg"
              }, {
                "englishName": "Latvia",
                "id": "LV",
                "frenchName": "Lettonie"
              }, {
                "englishName": "Libya",
                "id": "LY",
                "frenchName": "Libye"
              }, {
                "englishName": "Morocco",
                "id": "MA",
                "frenchName": "Maroc"
              }, {
                "englishName": "Monaco",
                "id": "MC",
                "frenchName": "Monaco"
              }, {
                "englishName": "Moldova",
                "id": "MD",
                "frenchName": "Moldova"
              }, {
                "englishName": "Montenegro",
                "id": "ME",
                "frenchName": "Monténégro"
              }, {
                "englishName": "Saint Martin",
                "id": "MF",
                "frenchName": "Saint-Martin"
              }, {
                "englishName": "Madagascar",
                "id": "MG",
                "frenchName": "Madagascar"
              }, {
                "englishName": "Marshall Islands",
                "id": "MH",
                "frenchName": "Îles Marshall"
              }, {
                "englishName": "Macedonia",
                "id": "MK",
                "frenchName": "Macédoine"
              }, {
                "englishName": "Mali",
                "id": "ML",
                "frenchName": "Mali"
              }, {
                "englishName": "Burma (Myanmar)",
                "id": "MM",
                "frenchName": "Birmanie (Myanmar)"
              }, {
                "englishName": "Mongolia",
                "id": "MN",
                "frenchName": "Mongolie"
              }, {
                "englishName": "Macao",
                "id": "MO",
                "frenchName": "Macao"
              }, {
                "englishName": "Northern Marianas",
                "id": "MP",
                "frenchName": "Îles Mariannes du Nord"
              }, {
                "englishName": "Martinique",
                "id": "MQ",
                "frenchName": "Martinique"
              }, {
                "englishName": "Mauritania",
                "id": "MR",
                "frenchName": "Mauritanie"
              }, {
                "englishName": "Montserrat",
                "id": "MS",
                "frenchName": "Montserrat"
              }, {
                "englishName": "Malta",
                "id": "MT",
                "frenchName": "Malte"
              }, {
                "englishName": "Mauritius",
                "id": "MU",
                "frenchName": "Île Maurice"
              }, {
                "englishName": "Maldives",
                "id": "MV",
                "frenchName": "Maldives"
              }, {
                "englishName": "Malawi",
                "id": "MW",
                "frenchName": "Malawi"
              }, {
                "englishName": "Mexico",
                "id": "MX",
                "frenchName": "Mexique"
              }, {
                "englishName": "Malaysia",
                "id": "MY",
                "frenchName": "Malaisie"
              }, {
                "englishName": "Mozambique",
                "id": "MZ",
                "frenchName": "Mozambique"
              }, {
                "englishName": "Namibia",
                "id": "NA",
                "frenchName": "Namibie"
              }, {
                "englishName": "New Caledonia",
                "id": "NC",
                "frenchName": "Nouvelle-Calédonie"
              }, {
                "englishName": "Niger",
                "id": "NE",
                "frenchName": "Niger"
              }, {
                "englishName": "Nigeria",
                "id": "NG",
                "frenchName": "Nigéria"
              }, {
                "englishName": "Nicaragua",
                "id": "NI",
                "frenchName": "Nicaragua"
              }, {
                "englishName": "Netherlands",
                "id": "NL",
                "frenchName": "Pays-Bas"
              }, {
                "englishName": "Norway",
                "id": "NO",
                "frenchName": "Norvège"
              }, {
                "englishName": "Nepal",
                "id": "NP",
                "frenchName": "Népal"
              }, {
                "englishName": "Nauru",
                "id": "NR",
                "frenchName": "Nauru"
              }, {
                "englishName": "Niue",
                "id": "NU",
                "frenchName": "Niue"
              }, {
                "englishName": "New Zealand",
                "id": "NZ",
                "frenchName": "Nouvelle-Zélande"
              }, {
                "englishName": "Oman",
                "id": "OM",
                "frenchName": "Oman"
              }, {
                "englishName": "Panama",
                "id": "PA",
                "frenchName": "Panama"
              }, {
                "englishName": "Peru",
                "id": "PE",
                "frenchName": "Pérou"
              }, {
                "englishName": "French Polynesia",
                "id": "PF",
                "frenchName": "Polynésie française"
              }, {
                "englishName": "Papua New Guinea",
                "id": "PG",
                "frenchName": "Papouasie-Nouvelle-Guinée"
              }, {
                "englishName": "Philippines",
                "id": "PH",
                "frenchName": "Philippines"
              }, {
                "englishName": "Pakistan",
                "id": "PK",
                "frenchName": "Pakistan"
              }, {
                "englishName": "Poland",
                "id": "PL",
                "frenchName": "Pologne"
              }, {
                "englishName": "Saint-Pierre-et-Miquelon",
                "id": "PM",
                "frenchName": "Saint-Pierre-et-Miquelon"
              }, {
                "englishName": "Puerto Rico",
                "id": "PR",
                "frenchName": "Porto Rico"
              }, {
                "englishName": "Portugal",
                "id": "PT",
                "frenchName": "Portugal"
              }, {
                "englishName": "Azores",
                "id": "PT-20",
                "frenchName": "Açores"
              }, {
                "englishName": "Palau",
                "id": "PW",
                "frenchName": "Palaos"
              }, {
                "englishName": "Paraguay",
                "id": "PY",
                "frenchName": "Paraguay"
              }, {
                "englishName": "Qatar",
                "id": "QA",
                "frenchName": "Qatar"
              }, {
                "englishName": "Romania",
                "id": "RO",
                "frenchName": "Roumanie"
              }, {
                "englishName": "Serbia",
                "id": "RS",
                "frenchName": "Serbie"
              }, {
                "englishName": "Russia",
                "id": "RU",
                "frenchName": "Russie"
              }, {
                "englishName": "Rwanda",
                "id": "RW",
                "frenchName": "Rwanda"
              }, {
                "englishName": "Saudi Arabia",
                "id": "SA",
                "frenchName": "Arabie saoudite"
              }, {
                "englishName": "Solomon Islands",
                "id": "SB",
                "frenchName": "Îles Salomon"
              }, {
                "englishName": "Seychelles",
                "id": "SC",
                "frenchName": "Seychelles"
              }, {
                "englishName": "Sudan",
                "id": "SD",
                "frenchName": "Soudan"
              }, {
                "englishName": "Sweden",
                "id": "SE",
                "frenchName": "Suède"
              }, {
                "englishName": "Singapore",
                "id": "SG",
                "frenchName": "Singapour"
              }, {
                "englishName": "Slovenia",
                "id": "SI",
                "frenchName": "Slovénie"
              }, {
                "englishName": "Slovakia",
                "id": "SK",
                "frenchName": "Slovaquie"
              }, {
                "englishName": "Sierra Leone",
                "id": "SL",
                "frenchName": "Sierra Leone"
              }, {
                "englishName": "San Marino",
                "id": "SM",
                "frenchName": "Saint-Marin"
              }, {
                "englishName": "Senegal",
                "id": "SN",
                "frenchName": "Sénégal"
              }, {
                "englishName": "Somalia",
                "id": "SO",
                "frenchName": "Somalie"
              }, {
                "englishName": "Suriname",
                "id": "SR",
                "frenchName": "Suriname"
              }, {
                "englishName": "South Sudan",
                "id": "SS",
                "frenchName": "Soudan du Sud"
              }, {
                "englishName": "São Tomé and Principe",
                "id": "ST",
                "frenchName": "São Tomé-et-Principe"
              }, {
                "englishName": "El Salvador",
                "id": "SV",
                "frenchName": "Salvador"
              }, {
                "englishName": "Sint Maarten",
                "id": "SX",
                "frenchName": "Sint Maarten"
              }, {
                "englishName": "Syria",
                "id": "SY",
                "frenchName": "Syrie"
              }, {
                "englishName": "Swaziland",
                "id": "SZ",
                "frenchName": "Swaziland"
              }, {
                "englishName": "Turks and Caicos Islands",
                "id": "TC",
                "frenchName": "Îles Turques et Caïques"
              }, {
                "englishName": "Chad",
                "id": "TD",
                "frenchName": "Tchad"
              }, {
                "englishName": "Togo",
                "id": "TG",
                "frenchName": "Togo"
              }, {
                "englishName": "Thailand",
                "id": "TH",
                "frenchName": "Thaïlande"
              }, {
                "englishName": "Tajikistan",
                "id": "TJ",
                "frenchName": "Tadjikistan"
              }, {
                "englishName": "Tokelau",
                "id": "TK",
                "frenchName": "Tokelau"
              }, {
                "englishName": "Timor-Leste (East Timor)",
                "id": "TL",
                "frenchName": "Timor-Leste (Timor oriental)"
              }, {
                "englishName": "Turkmenistan",
                "id": "TM",
                "frenchName": "Turkménistan"
              }, {
                "englishName": "Tunisia",
                "id": "TN",
                "frenchName": "Tunisie"
              }, {
                "englishName": "Tonga",
                "id": "TO",
                "frenchName": "Tonga"
              }, {
                "englishName": "Turkey",
                "id": "TR",
                "frenchName": "Turquie"
              }, {
                "englishName": "Trinidad and Tobago",
                "id": "TT",
                "frenchName": "Trinité-et-Tobago"
              }, {
                "englishName": "Tuvalu",
                "id": "TV",
                "frenchName": "Tuvalu"
              }, {
                "englishName": "Taiwan",
                "id": "TW",
                "frenchName": "Taïwan"
              }, {
                "englishName": "Tanzania",
                "id": "TZ",
                "frenchName": "Tanzanie"
              }, {
                "englishName": "Ukraine",
                "id": "UA",
                "frenchName": "Ukraine"
              }, {
                "englishName": "Uganda",
                "id": "UG",
                "frenchName": "Ouganda"
              }, {
                "englishName": "United States",
                "id": "US",
                "frenchName": "États-Unis"
              }, {
                "englishName": "Uruguay",
                "id": "UY",
                "frenchName": "Uruguay"
              }, {
                "englishName": "Uzbekistan",
                "id": "UZ",
                "frenchName": "Ouzbékistan"
              }, {
                "englishName": "Saint Vincent \u0026 the Grenadines",
                "id": "VC",
                "frenchName": "Saint-Vincent-et-Grenadines"
              }, {
                "englishName": "Venezuela",
                "id": "VE",
                "frenchName": "Venezuela"
              }, {
                "englishName": "British Virgin Islands",
                "id": "VG",
                "frenchName": "Îles Vierges britanniques"
              }, {
                "englishName": "Virgin Islands (U.S.)",
                "id": "VI",
                "frenchName": "Îles Vierges américaines"
              }, {
                "englishName": "Vietnam",
                "id": "VN",
                "frenchName": "Vietnam"
              }, {
                "englishName": "Vanuatu",
                "id": "VU",
                "frenchName": "Vanuatu"
              }, {
                "englishName": "Samoa",
                "id": "WS",
                "frenchName": "Samoa"
              }, {
                "englishName": "Kosovo",
                "id": "XK",
                "frenchName": "Kosovo"
              }, {
                "englishName": "Yemen",
                "id": "YE",
                "frenchName": "Yémen"
              }, {
                "englishName": "Mayotte",
                "id": "YT",
                "frenchName": "Mayotte"
              }, {
                "englishName": "South Africa",
                "id": "ZA",
                "frenchName": "Afrique du Sud"
              }, {
                "englishName": "Zambia",
                "id": "ZM",
                "frenchName": "Zambie"
              }, {
                "englishName": "Zimbabwe",
                "id": "ZW",
                "frenchName": "Zimbabwe"
              }];

        }

    );