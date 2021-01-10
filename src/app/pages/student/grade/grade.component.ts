import { Component } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: "Grade",
  templateUrl: "./grade.component.html"
})
export class GradeComponent {
  public onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
