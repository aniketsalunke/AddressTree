import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  countries: any[] = [];
  states: any[] = [];
  districts: any[] = [];
  places: any[] = [];
  filteredStates: any[] = [];
  filteredDistricts: any[] = [];
  filteresPlaces: any[] = [];
  addressHeirarnchy = {};
  selectedCountry: any;
  showStatesDopdown: boolean = false;
  showDistrictsDopdown: boolean = false;
  showPlacesDopdown: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.countries = [
      { id: "1", name: "India" },
      { id: "2", name: "Germany" }
    ];

    this.states = [
      { id: "s1", parentId: "2", name: "Bavaria" },
      { id: "s2", parentId: "2", name: "Berlin" },
      { id: "s3", parentId: "1", name: "Maharashtra" },
      { id: "s4", parentId: "1", name: "Tamilnadu" }
    ];

    this.districts = [
      { id: "d1", parentId: "s1", name: "Upper Bavaria" },
      { id: "d2", parentId: "s1", name: "Lower Bavaria" },
      { id: "d3", parentId: "s2", name: "Berlin-Mitte" },
      { id: "d4", parentId: "s2", name: "Kreuzberg" },
      { id: "d5", parentId: "s3", name: "Nashik" },
      { id: "d6", parentId: "s3", name: "Jalgoan" },
      { id: "d7", parentId: "s4", name: "Ariyalur" },
      { id: "d8", parentId: "s4", name: "Chennai" }
    ];

    this.places = [
      { id: "p1", parentId: "d1", name: "Munich" },
      { id: "p2", parentId: "d1", name: "Erding" },
      { id: "p3", parentId: "d2", name: "Leipzig" },
      { id: "p4", parentId: "d2", name: "Landshut" },
      { id: "p5", parentId: "d3", name: "Passau" },
      { id: "p6", parentId: "d3", name: "Gesundbrunnen" },
      { id: "p7", parentId: "d4", name: "Frieburg" },
      { id: "p8", parentId: "d4", name: "Hamburg" },
      { id: "p9", parentId: "d6", name: "Raver" },
      { id: "p10", parentId: "d6", name: "Savda" },
      { id: "p11", parentId: "d5", name: "Ozar" },
      { id: "p12", parentId: "d5", name: "Manmad" },
      { id: "p13", parentId: "d7", name: "Thirumanur" },
      { id: "p14", parentId: "d7", name: "Sendurai" },
      { id: "p15", parentId: "d8", name: "New Chennai" },
      { id: "p16", parentId: "d8", name: "Old Chennai" }
    ];
  }

  /**
   * Method to toggle dropdowns
   * @param selectedId - id of the selected dropdown value ( id )
   * @param type - ( country, state, district ) 
   */
  updateHeirarchy(selectedId: any, type: string) {
    switch (type) {
      case "country": {
        this.showStatesDopdown = true;
        this.showDistrictsDopdown = false;
        this.showPlacesDopdown = false;
        this.filteredStates = this.states.filter(state => state.parentId == selectedId);
        this.selectedCountry = this.countries.find(country => country.id == selectedId).name;
        break;
      } case "state": {
        this.showStatesDopdown = true;
        this.showDistrictsDopdown = true;
        this.showPlacesDopdown = false;
        this.filteredDistricts = this.districts.filter(district => district.parentId == selectedId);
        break;
      } case "district": {
        this.showStatesDopdown = true;
        this.showDistrictsDopdown = true;
        this.showPlacesDopdown = true;
        this.filteresPlaces = this.places.filter(place => place.parentId == selectedId);
        break;
      }
      default: {
        break;
      }
    }
  }

}

