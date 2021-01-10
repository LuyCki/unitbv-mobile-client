import { Component, OnInit } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { DataItem, DataService } from "~/app/@core/services/data.service";

@Component({
    selector: "Announces",
    templateUrl: "./announces.component.html"
})
export class AnnouncesComponent implements OnInit {
    public items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    public ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    public onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView();
        sideDrawer.showDrawer();
    }
}
