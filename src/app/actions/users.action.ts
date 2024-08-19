import { createAction, props } from "@ngrx/store";
import { userDetails, Users } from "../interfaces/user";



// export const increment = createAction('[appComponent] increment');

export const loadUsers = createAction(
   '[userComponent] loadUsers',
   props<{ pageNumber: Number }>()
);

export const loadUsersSuccess = createAction(
   '[User] Load Users Success',
   props<{ users: Users }>()
);


export const loadUsersFailure = createAction(
   '[User] Load Users Failure',
   props<{ error: any }>()
);



 export const loadUser = createAction(
   '[User Detail] Load User',
   props<{ id: number }>()
 );
 
 export const loadUserSuccess = createAction(
   '[User Detail] Load User Success',
   props<{ user: any }>()
 );

