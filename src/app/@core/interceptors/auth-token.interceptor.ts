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

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  private authToken: string;

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authToken}`
      }
    });

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err?.status === 401) {
          // Well do something
        }

        return throwError(err);
      })
    );
  }
}
