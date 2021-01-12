import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthTokenInterceptorService implements HttpInterceptor {

  constructor(private localStoreService: LocalStorageService, private userService: UserService) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.localStoreService.getString('jwt_token')}`
      }
    });

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err?.status === 401) {
          this.userService.logout();
        }

        return throwError(err);
      })
    );
  }
}
