# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<!-- <p>Search works!</p>
<div class="container">
  <h1 class="main-heading">Tender Register: All</h1>
  <input type="text" class="search" placeholder="Search..." [(ngModel)]="searchQuery" (input)="search()">
  <div *ngIf="searchResults.length > 0">
    <ul>
      <li *ngFor="let result of searchResults">{{ result | json }}</li>
    </ul>
  </div>
</div> -->


<!-- import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private service: ServiceService) {}

  search(): void {
    this.service.searchData(this.searchQuery).subscribe((res: any) => {
      this.searchResults = res.data;
    });
  }
} -->



<!-- <input type="text" class="search" placeholder="Search..." [(ngModel)]="searchQuery"> -->




<!-- searchData(query: string): Observable<any> {
  const token = 'your_token_here';
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url = `https://apis.fretron.com/shipment-view/partner-fleet/fleets/v2?size=50&sharedOnly=false&filters={"fleetType":[],"trackingEnabled":[],"fleetOwnerName":[],"trackingMode":[],"vehicleType":[],"vehicleBranch":[],"manufacturer":[],"vehicleGroup":[],"vehicleZone":[],"vehicleRegion":[],"vehicleModel":[],"status":null,"_or":{"groupsShared":[],"sharedWith":[]}}&search=${query}`;
  return this.http.get(url, { headers });
} -->
