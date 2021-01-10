import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "Auth",
    templateUrl: "./auth.component.html"
})
export class AuthComponent {
  constructor(private routerExtension: RouterExtensions) { };

  public onNavigateStudent() {
    this.routerExtension.navigate(["/announces"]);
  }
}
