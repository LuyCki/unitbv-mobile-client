import { StudentsComponent } from './students/students.component';
import { SpecializationsComponent } from './specializations/specializations.component';
import { ProfessorsComponent } from './professors/professors.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ClassesComponent } from './classes/classes.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { VisualizationDataRoutingModule } from "./visualization-data-routing.module";
import { VisualizationDataComponent } from "./visualization-data.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    VisualizationDataRoutingModule
  ],
  declarations: [
    VisualizationDataComponent,
    ClassesComponent,
    DepartmentsComponent,
    DisciplinesComponent,
    ProfessorsComponent,
    SpecializationsComponent,
    StudentsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class VisualizationDataModule { }
