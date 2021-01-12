import { AdminService } from './../../../../@core/api/admin.service';
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "Departments",
  templateUrl: "./departments.component.html"
})
export class DepartmentsComponent implements OnInit {
  public departments;

  constructor(private _routerExtensions: RouterExtensions, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService
      .getDepartments()
      .subscribe((departments) => {
        this.departments = departments;
    })
  }

  public onBackTap(): void {
    this._routerExtensions.back();
  }
}
