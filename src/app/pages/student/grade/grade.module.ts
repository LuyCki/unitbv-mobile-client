import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { GradeRoutingModule } from "./grade-routing.module";
import { GradeComponent } from "./grade.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    GradeRoutingModule
  ],
  declarations: [
    GradeComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class GradeModule { }
