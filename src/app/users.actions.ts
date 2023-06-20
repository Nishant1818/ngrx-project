// import { createAction, props } from '@ngrx/store';

// export const loadUsers = createAction('[Users] Load Users');
// export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: any[] }>());
// export const loadUsersFailure = createAction('[Users] Load Users Failure', props<{ error: any }>());


import { createAction, props } from '@ngrx/store';

// export const loadUsers = createAction('[Users] Load Users');
export const loadUsers = createAction('[Users] Load Users', props<any | undefined>());

export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: any[] }>());
export const loadUsersFailure = createAction('[Users] Load Users Failure', props<{ error: any }>());
