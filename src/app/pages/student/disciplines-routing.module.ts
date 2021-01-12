import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { DisciplinesComponent } from "./disciplines.component";
import { ExamsComponent } from "./exams/exams.component";

const routes: Routes = [
  { path: "", component: DisciplinesComponent },
  {
    path: "exam/:disciplineId", component: ExamsComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class DisciplinesRoutingModule { }
