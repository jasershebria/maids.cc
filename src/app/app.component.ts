import { Component, inject, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { LoadingService } from './services/loading.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, NavbarComponent, UsersComponent, RouterOutlet,ProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[

  ]
})
export class AppComponent implements OnInit {
  _LoadingService = inject(LoadingService);
  isLoading:boolean = false;


  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      delay: 300,
    });

    this._LoadingService.isLoadingAsObs.subscribe({
      next:(res)=>{
        this.isLoading=res;
        console.log('isloading',this.isLoading)
      }
    })
  }



}
