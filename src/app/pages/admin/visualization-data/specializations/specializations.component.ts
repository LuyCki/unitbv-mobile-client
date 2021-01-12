import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { AdminService } from "~/app/@core/api/admin.service";

@Component({
  selector: "Specializations",
  templateUrl: "./specializations.component.html"
})
export class SpecializationsComponent implements OnInit {
  public specializations;

  constructor(private _routerExtensions: RouterExtensions, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService
      .getSpecializations()
      .subscribe((specializations) => {
        this.specializations = specializations;
    })
  }

  public onBackTap(): void {
    this._routerExtensions.back();
  }
}
