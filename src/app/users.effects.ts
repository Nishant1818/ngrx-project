
// import { Injectable } from '@angular/core';

// import { Actions, createEffect, ofType } from '@ngrx/effects';

// import { of } from 'rxjs';

// import { catchError, map, switchMap } from 'rxjs/operators';


// import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';
// import { ServiceService } from './services/service.service';

 

// @Injectable()

// export class UsersEffects {

//   loadUsers$ = createEffect(() =>

//     this.actions$.pipe(

//       ofType(loadUsers),

//       switchMap(() =>

//         this.userData.users('').pipe(

//           map((users: any[]) => loadUsersSuccess({ users })),

//           catchError(error => of(loadUsersFailure({ error })))

//         )

//       )

//     )

//   );

 

//   constructor(private actions$: Actions, private userData: ServiceService) {}

// }




import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ServiceService } from './services/service.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userData: ServiceService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap((action) =>
        this.userData.users(action.searchTerm).pipe(
          map((response) => loadUsersSuccess({ users: response })),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

}
