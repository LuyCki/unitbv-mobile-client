import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { AnnouncesRoutingModule } from "./announces-routing.module";
import { AnnouncesComponent } from "./announces.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AnnouncesRoutingModule
    ],
    declarations: [
        AnnouncesComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AnnouncesModule { }
