// // import { createReducer, on } from '@ngrx/store';
// // import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

// // export interface UsersState {
// //   users: any[];
// //   loading: boolean;
// //   error: any;
// // }

// // export const initialState: UsersState = {
// //   users: [],
// //   loading: false,
// //   error: null
// // };

// // export const usersReducer = createReducer(
// //   initialState,
// //   on(loadUsers, state => ({ ...state, loading: true, error: null })),
// //   on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
// //   on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false }))
// // );

// import { createReducer, on } from '@ngrx/store';
// import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

// export interface UsersState {
//   users: any[];
//   loading: boolean;
//   error: any;
// }

// export const initialState: UsersState = {
//   users: [],
//   loading: false,
//   error: null
// };

// export const usersReducer = createReducer(
//   initialState,
//   on(loadUsers, (state) => ({ ...state, loading: true, error: null })),
//   on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
//   on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false }))
// );

import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

export interface UsersState {
  users: any[];
  loading: boolean;
  error: any;
  searchTerm: string;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  searchTerm: '',
};

export const usersReducer = createReducer(
  initialState,
  // on(loadUsers, state => ({ ...state, loading: true, error: null })),
  on(loadUsersSuccess, (state, user:any) => ({
    ...state,
    users: user.users.data,
    loading: false,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);
