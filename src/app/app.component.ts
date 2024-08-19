import { Component, inject, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';

import { UsersComponent } from './components/users/users.component';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { LoadingService } from './services/loading.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Store } from '@ngrx/store';
import { NavbarComponent } from './core/navbar/navbar.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    NavbarComponent,
    UsersComponent,
    RouterOutlet,
    ProgressSpinnerModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [

  ]
})
export class AppComponent implements OnInit {
  _LoadingService = inject(LoadingService);
  _store = inject(Store);
  isLoading: boolean = false;


  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      delay: 300,
    });

    this._LoadingService.isLoadingAsObs.subscribe({
      next: (res) => {
        this.isLoading = res;
        console.log('isloading', this.isLoading)
      }
    })
  }

  // increment() {
  //   this._store.dispatch(increment());
  // }



}
