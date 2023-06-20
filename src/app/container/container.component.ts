import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { ServiceService } from '../services/service.service';
import { Store } from '@ngrx/store';
import { loadUsers } from '../users.actions';
import * as UsersAction from '../users.actions';
import * as UsersSelectors from '../users.selectors';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, AfterViewInit {
  search: string = '';
  searchTerm: string = '';
  users: any;
  users$: Observable<any>;

  @ViewChild('searchInput') searchInput: any;
  constructor(private service: ServiceService, private store: Store) {}

  ngOnInit(): void {
    this.fetchVehicles(this.search);
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((event: any) => event.target.value)
    ).subscribe((txt: string) => this.fetchVehicles(txt))
  }

  fetchVehicles(search: string) {
    this.store.dispatch(loadUsers({ searchTerm: search }));
  }
}

// import { Component } from '@angular/core';
// import { ServiceService } from '../services/service.service';
// import { Observable, map } from 'rxjs';

// @Component({
//   selector: 'app-container',
//   templateUrl: './container.component.html',
//   styleUrls: ['./container.component.css']
// })
// export class ContainerComponent {
//   // users!: Observable<any[]>;

//   users: any[] = [];

//   // users:any;
//   //create a viewChild and get it's elementRef

//   constructor(private userData:ServiceService){}
//   ngOnInit(): void {
//     //get native element keyup event
//     //use operators - fromEvent, debounceTime, pass search value on the action
//     //remove this code
//   //   this.userData.users('').subscribe((data:any)=>{
//   //     console.log("data", data)
//   //     this.users=data.data})
//   // }
//   // this.users = this.userData.users('').pipe(
//   //   map((data: any) => {
//   //     console.log("data", data);
//   //     return data.data;
//   //   })
//   // );
//   this.fetchData();

// }
// fetchData() {
//   this.userData.users('').subscribe((data: any) => {
//     console.log("Data:", data);
//     this.users = data.data;
//   });
// }
// }

// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { fromEvent, Observable } from 'rxjs';
// import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
// import { ServiceService } from '../services/service.service';

// @Component({
//   selector: 'app-container',
//   templateUrl: './container.component.html',
//   styleUrls: ['./container.component.css']
// })
// export class ContainerComponent {
//   users: any[] = [];
//    searchQuery: string = '';

//   @ViewChild('searchInput', { static: true }) searchInput!: ElementRef<HTMLInputElement>;

//   constructor(private userData: ServiceService) {}

//   ngOnInit(): void {
//     const search$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
//       map((event: Event) => (event.target as HTMLInputElement).value),
//       debounceTime(300),
//       distinctUntilChanged(),
//       switchMap((searchTerm: string) => this.userData.users(searchTerm))
//     );

//     this.userData.users('').subscribe((data: any) => {
//       this.users = data.data;
//     });

//     search$.subscribe((data: any) => {
//       this.users = data.data;
//     });
//   }
// }
