import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { ClassesComponent } from "./classes/classes.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { DisciplinesComponent } from "./disciplines/disciplines.component";
import { ProfessorsComponent } from "./professors/professors.component";
import { SpecializationsComponent } from "./specializations/specializations.component";
import { StudentsComponent } from "./students/students.component";

import { VisualizationDataComponent } from "./visualization-data.component";

const routes: Routes = [
    { path: "", component: VisualizationDataComponent },
    { path: "departments", component: DepartmentsComponent },
    { path: "disciplines", component: DisciplinesComponent },
    { path: "classes", component: ClassesComponent },
    { path: "professors", component: ProfessorsComponent },
    { path: "students", component: StudentsComponent },
    { path: "specializations", component: SpecializationsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class VisualizationDataRoutingModule { }
