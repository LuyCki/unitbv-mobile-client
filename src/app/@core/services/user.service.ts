import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouterExtensions } from '@nativescript/angular';
import { LocalStorageService } from './local-storage.service';
import { HttpService } from '../api/http.service';
import jwt_decode from 'jwt-decode';

export interface Login {
  email: string;
  password: string;
}

export interface User {
  username: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpService, private localStorageService: LocalStorageService, private routerExtension: RouterExtensions) { }

  public login(payload: Login): void {
    this.http.post('auth/login', payload)
      .subscribe(response => {
        console.log(response);
        const jwtPayload = { key: 'jwt_token', value: response.accessToken };
        const jwtDecoded = jwt_decode<any>(response.accessToken)

        const user = {
          username: jwtDecoded.USER_NAME,
          email: jwtDecoded.EMAIL,
          role: jwtDecoded.ROLES[0].authority
        }

        const userPayload = {
          key: 'current_user',
          value: JSON.stringify(user)
        }

        this.localStorageService.addString(jwtPayload);
        this.localStorageService.addString(userPayload);

        this.isLoggedIn();
      });
  }

  public isLoggedIn(): void {
    const jwtToken = this.localStorageService.getString('jwt_token');
    const currentUser: User = JSON.parse(this.localStorageService.getString('current_user'));

    console.log(jwtToken)
    console.log(currentUser)
    this.currentUser.next(currentUser);

    if (jwtToken) {
      switch (currentUser.role) {
        case 'ROLE_ADMIN':
          this.routerExtension.navigate(["../visualization-data"]);
          break;
        case 'ROLE_STUDENT':
          this.routerExtension.navigate(["../disciplines-student"]);
          break;
        case 'ROLE_PROFESSOR':
          this.routerExtension.navigate(["../disciplines"]);
          break;
      }
    }
  }

  public logout(): void {
    this.localStorageService.removeAll();
    this.currentUser.next(null);
    this.routerExtension.navigate(["../auth"]);
  }
}
