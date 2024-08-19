import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchByid = new EventEmitter<any>();
  seatchByIdAsOBS= this.searchByid.asObservable()
}
