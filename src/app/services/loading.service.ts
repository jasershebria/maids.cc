import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  isLoading = new BehaviorSubject<boolean>(false);
  isLoadingAsObs= this.isLoading.asObservable();
  show(){
    this.isLoading.next(true)
  }

  hide(){
    this.isLoading.next(false)
  }
}
