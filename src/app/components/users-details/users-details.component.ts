import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import {  User, userDetails } from '../../interfaces/user';


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

  private _id = this._ActivatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this._UsersService.getUserById(this._id).subscribe((res:userDetails)=>{
      this.data  = res.data;

      // console.log('userdetails',this.data)
    })
  }
}
