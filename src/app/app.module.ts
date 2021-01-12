import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AuthTokenInterceptorService } from "./@core/interceptors/auth-token.interceptor";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./pages/auth/auth.component";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUISideDrawerModule,
    NativeScriptHttpClientModule
  ],
  declarations: [
    AppComponent,
    AuthComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
