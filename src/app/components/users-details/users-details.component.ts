import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import {  User, userDetails } from '../../interfaces/user';
import { Store } from '@ngrx/store';
import { loadUser } from '../../actions/users.action';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.scss'
})
export class UsersDetailsComponent implements OnInit{
  
  data:User = {} as User;



  private _ActivatedRoute = inject(ActivatedRoute);
  private _UsersService = inject(UsersService);

  // private store = inject(Store)

  private _id = this._ActivatedRoute.snapshot.params['id'];

  constructor(private store: Store<{ users: userDetails }>) {
    this.store.dispatch(loadUser({id:this._id}));
    store.select((state) => state.users.data).subscribe(
      (res:User)=>{
        this.data = res
      }
    );
   
  }

  ngOnInit(): void {  }
}
