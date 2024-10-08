import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userDetails, Users } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _HttpClient = inject(HttpClient);

  getUsers(pageNum:Number):Observable<Users>{
     return this._HttpClient.get<Users>(`https://reqres.in/api/users?page=${pageNum}`);
  }

  getUserById(userId:Number):Observable<userDetails>{
    debugger;
    return this._HttpClient.get<userDetails>(`https://reqres.in/api/users/${userId}`);
  } 

}
