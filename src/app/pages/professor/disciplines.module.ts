import { AddExamComponent } from './exams/add-exam/add-exam.component';
import { AddGradeComponent } from './exams/grades/add-grade/add-grade.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

import { DisciplinesRoutingModule } from "./disciplines-routing.module";
import { DisciplinesComponent } from "./disciplines.component";
import { ExamsComponent } from "./exams/exams.component";
import { GradesComponent } from "./exams/grades/grades.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    DisciplinesRoutingModule,
    NativeScriptFormsModule
  ],
  declarations: [
    DisciplinesComponent,
    GradesComponent,
    ExamsComponent,
    AddExamComponent,
    AddGradeComponent
  ],
  entryComponents: [AddGradeComponent, AddExamComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DisciplinesModule { }
