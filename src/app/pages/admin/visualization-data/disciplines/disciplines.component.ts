import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { AdminService } from "~/app/@core/api/admin.service";

@Component({
  selector: "Disciplines",
  templateUrl: "./disciplines.component.html"
})
export class DisciplinesComponent implements OnInit {
  public disciplines;

  constructor(private _routerExtensions: RouterExtensions, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService
      .getDisciplines()
      .subscribe((disciplines) => {
        this.disciplines = disciplines;
    })
  }

  public onBackTap(): void {
    this._routerExtensions.back();
  }
}
