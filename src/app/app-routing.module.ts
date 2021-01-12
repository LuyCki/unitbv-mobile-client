import { DisciplinesModule } from './pages/professor/disciplines.module';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: "auth", component: AuthComponent },

  // Admin Modules
  { path: "upload-documents", loadChildren: () => import("./pages/admin/upload-documents/upload-documents.module").then((m) => m.UploadDocumentsModule) },
  { path: "visualization-data", loadChildren: () => import("./pages/admin/visualization-data/visualization-data.module").then((m) => m.VisualizationDataModule) },

  // Professor Modules
  { path: "disciplines", loadChildren: () => import("./pages/professor/disciplines.module").then((m) => m.DisciplinesModule) },

  // Student Modules
  { path: "disciplines-student", loadChildren: () => import("./pages/student/disciplines.module").then((m) => m.DisciplinesModule) }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
