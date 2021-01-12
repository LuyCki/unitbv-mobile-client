import { AdminService } from './../../@core/api/admin.service';
import { Component, OnInit } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "Disciplines",
    templateUrl: "./disciplines.component.html"
})
export class DisciplinesComponent implements OnInit {
    public disciplines;

    constructor(private adminService: AdminService) { }

    public ngOnInit(): void {
        this.adminService
          .getDisciplines()
          .subscribe((disciplines) => this.disciplines = disciplines);
    }

    public onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
