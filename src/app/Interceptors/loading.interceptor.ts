import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
 let _LoadingService= inject(LoadingService);
  _LoadingService.show();
  return next(req).pipe(
    delay(400),
    finalize(()=>{
    _LoadingService.hide();
  }));
};

