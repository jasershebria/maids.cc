import { Component } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
      

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AutoCompleteModule,
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  countries: any[] = [];

  selectedCountry: any;

  filteredCountries: any[] = [];



  filterCountry(event:any){

  }
}
