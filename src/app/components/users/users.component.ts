
import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { UsersService } from '../../services/users.service';
import { User, Users } from '../../interfaces/user';
import { PaginatorModule } from 'primeng/paginator'; 
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../actions/users.action';
import { CommonModule,  } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { delay } from 'rxjs';




RouterLink
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CardModule,
    PaginatorModule,
    RouterLink,
    RouterOutlet, RouterLinkActive,
    CommonModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users:User[] = [] ;

  

  totalRecords:number = 0;
  perPage:number = 0;
  totalPages:number = 0;
  pageNumber: number = 1;

  constructor(
    private store: Store<{ users: Users }>,
    private _SearchService:SearchService
    ) {
    this.store.select((state) => state.users).subscribe((response:Users)=>{
      if(response){
        this.users= response['data'];
        this.totalRecords = response['total'];
        this.totalPages = response['total_pages'];
        this.perPage = response['per_page'];
      }
    })
  }
 
  ngOnInit(): void {
    this.store.dispatch(loadUsers({ pageNumber:  this.pageNumber }));

    this._SearchService.seatchByIdAsOBS.pipe(
      delay(400)
    ).subscribe((res)=>{
      console.log('myevent',res.value)
      if(res.value != ''){
        this.users= this.users.filter((user)=>  res.value==user['id']);
      }
      else{
        // console.log('myevent',res)
        this.store.dispatch(loadUsers({ pageNumber:  this.pageNumber}));
      }
     
    })

    
  }

  onPageChange(event:any){
    this.pageNumber =  event.page+1;
    this.store.dispatch(loadUsers({ pageNumber:  this.pageNumber }));
  }

}
