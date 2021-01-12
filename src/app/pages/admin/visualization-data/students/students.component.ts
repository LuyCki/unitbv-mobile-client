import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { AdminService } from "~/app/@core/api/admin.service";

@Component({
  selector: "Students",
  templateUrl: "./students.component.html"
})
export class StudentsComponent implements OnInit {
  public students;

  constructor(private _routerExtensions: RouterExtensions, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService
      .getStudents()
      .subscribe((students) => {
        this.students = students;
    })
  }

  public onBackTap(): void {
    this._routerExtensions.back();
  }
}
