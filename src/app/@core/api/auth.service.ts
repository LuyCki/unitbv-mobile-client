import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../services/user.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  public login(payload: Login): Observable<any> {
    return this.httpService.post('auth/login', payload);
  }
}
