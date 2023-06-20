import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import { loadUsers } from '../users.actions';
import { select } from '@ngrx/store';
import * as UsersAction from '../users.actions';
import * as UsersSelectors from '../users.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  // users$: Observable<any[]>;
  users: any[] = [];

  // users$: Observable<any[]> = of([]);
  users$: Observable<any>;

  // constructor(private store: Store<{ users: any[] }>) {}

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.users$ = this.store.select(UsersSelectors.selectUsers).pipe(
      map((res: any) => res)
    );
    //instead of subscribe create a observable and use it inside .html file with async pipe
    // this.users$ = this.store
    //   .select(UsersSelectors.selectUsers)
    //   .pipe(map((res: any) => res.data) );
    // this.store.dispatch(loadUsers());
    // this.users$ = this.store.select(UsersSelectors.selectUsers);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable, map, of } from 'rxjs';
// // import { loadUsers , UsersSelectors} from '../users.actions';
// import * as UsersSelectors from '../users.selectors';
// import { selectUsers } from '../users.selectors';
// import { loadUsers,  } from '../users.actions';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent implements OnInit {
//   // users$: Observable<any>;
//   users$: Observable<any[]> = of([]);

//   constructor(private store: Store) {}

//   ngOnInit(): void {
//     this.store.dispatch(loadUsers());
//     this.store.select(UsersSelectors.selectUsers).subscribe((res:any)=>{
//       console.log(res)
//     })
//     // this.users$ = this.store.select(UsersSelectors.selectUsers);
//     this.users$ = this.store.select(UsersSelectors.selectUsers).pipe((res: any) => res.map((e: any) => e.data))

//   }
// }
