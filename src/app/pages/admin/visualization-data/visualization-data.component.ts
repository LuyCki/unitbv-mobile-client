import { Component } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: "VisualizationData",
  templateUrl: "./visualization-data.component.html"
})
export class VisualizationDataComponent {
  public onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
