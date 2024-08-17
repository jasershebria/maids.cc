import { Routes } from '@angular/router';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
   {
      path:'',
      component:UsersComponent
    },
   {
      path:'user-details/:id',
      component:UsersDetailsComponent
   }
];
