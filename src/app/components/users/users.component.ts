
import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { UsersService } from '../../services/users.service';
import { User, Users } from '../../interfaces/user';
import { PaginatorModule } from 'primeng/paginator'; 
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../actions/users.action';
import { CommonModule,  } from '@angular/common';




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


  constructor(
    private store: Store<{ users: Users }>
    ) {
    this.store.select((state) => state.users).subscribe((response:any)=>{
      if(response){
        this.users= response['data'];
        this.totalRecords = response['total'];
        this.totalPages = response['total_pages'];
        this.perPage = response['per_page'];
      }
    })
  }
 
  ngOnInit(): void {
    this.store.dispatch(loadUsers({ pageNumber: 1 }));
  }

  onPageChange(event:any){
    this.store.dispatch(loadUsers({ pageNumber: event.page+1 }));
  }

}
