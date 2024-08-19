import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

import { SearchService } from '../../services/search.service';
      

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
 
 _searchService = inject(SearchService);



}
