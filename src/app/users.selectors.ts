import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';


export const selectUsersState = createFeatureSelector<UsersState>('users');

//selector
// export const selectUsers = createSelector(
//     selectUsersState,
//     (state: UsersState) => {
//         console.log('Selected Users:', state.users);
//         return state.users;
//       }
//   );
  
export const selectUsers = createSelector(
    selectUsersState,
    (state: UsersState) => state.users
  );
export const selectSearchTerm = createSelector(
    selectUsersState,
    (state: UsersState) => state.searchTerm
  );