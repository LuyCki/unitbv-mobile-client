import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { AdminService } from "~/app/@core/api/admin.service";

@Component({
  selector: "Classes",
  templateUrl: "./classes.component.html"
})
export class ClassesComponent implements OnInit {
  public classes;

  constructor(private _routerExtensions: RouterExtensions, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService
      .getClasses()
      .subscribe((classes) => {
        this.classes = classes;
    })
  }
  public onBackTap(): void {
    this._routerExtensions.back();
  }
}
