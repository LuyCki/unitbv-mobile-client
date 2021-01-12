import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { AdminService } from "~/app/@core/api/admin.service";

@Component({
  selector: "Professors",
  templateUrl: "./professors.component.html"
})
export class ProfessorsComponent implements OnInit {
  public professors;

  constructor(private _routerExtensions: RouterExtensions, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService
      .getProfessors()
      .subscribe((professors) => {
        this.professors = professors;
    })
  }

  public onBackTap(): void {
    this._routerExtensions.back();
  }
}
