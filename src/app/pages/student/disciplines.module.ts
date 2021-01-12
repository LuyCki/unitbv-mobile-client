import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { DisciplinesRoutingModule } from "./disciplines-routing.module";
import { DisciplinesComponent } from "./disciplines.component";
import { ExamsComponent } from "./exams/exams.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    DisciplinesRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [
    DisciplinesComponent,
    ExamsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DisciplinesModule { }
