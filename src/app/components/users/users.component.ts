
import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { UsersService } from '../../services/users.service';
import { User, Users } from '../../interfaces/user';
import { PaginatorModule } from 'primeng/paginator'; 
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
RouterLink
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CardModule,
    PaginatorModule,
    RouterLink,
    RouterOutlet, RouterLinkActive
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users:User[] = [] ;

  totalRecords:number = 0;
  perPage:number = 0;
  totalPages:number = 0;

   _UsersService = inject(UsersService)
 
  ngOnInit(): void {
    this.getContent(1);
  }



  onPageChange(event:any){
    this.getContent(event.page+1);
  }

  getContent(pageNum:number){
    this._UsersService.getUsers(pageNum).subscribe((response:Users)=>{
      this.users= response['data'];
      this.totalRecords = response['total'];
      this.totalPages = response['total_pages'];
      this.perPage = response['per_page'];
      console.log('mydata',this.users)
    });
  }


}
