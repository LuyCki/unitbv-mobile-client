import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: "", redirectTo: "/auth", pathMatch: "full" },
  { path: "auth", component: AuthComponent },
  { path: "announces", loadChildren: () => import("./pages/student/announces/announces.module").then((m) => m.AnnouncesModule) },
  { path: "grade", loadChildren: () => import("./pages/student/grade/grade.module").then((m) => m.GradeModule) }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
