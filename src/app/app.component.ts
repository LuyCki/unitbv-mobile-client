import { User, UserService } from './@core/services/user.service';
import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import { Application } from "@nativescript/core";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  private _activatedUrl: string;
  private _sideDrawerTransition: DrawerTransitionBase;
  public user: User;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private userService: UserService) { }

  public ngOnInit(): void {
    this._activatedUrl = "/home";
    this._sideDrawerTransition = new SlideInOnTopTransition();

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);

    this.userService.isLoggedIn();
    this.userService.currentUser.subscribe((user) => {
      this.user = user;
    })
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  public isComponentSelected(url: string): boolean {
    return this._activatedUrl === url;
  }

  public onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });

    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();
  }

  public logout() {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();
    this.userService.logout();
  }
}
