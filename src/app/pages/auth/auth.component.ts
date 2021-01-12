import { Login, UserService } from './../../@core/services/user.service';
import { Component } from "@angular/core";
@Component({
    selector: "Auth",
    templateUrl: "./auth.component.html"
})
export class AuthComponent {
  public loginPayload: Login = {
    email: '',
    password: ''
  }

  constructor(private userService: UserService) { };

  public onLogin(): void {
    this.userService.login(this.loginPayload);
  }
}
