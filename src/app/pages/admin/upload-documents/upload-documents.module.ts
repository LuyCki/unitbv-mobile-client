import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { UploadDocumentsRoutingModule } from "./upload-documents-routing.module";
import { UploadDocumentsComponent } from "./upload-documents.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    UploadDocumentsRoutingModule
  ],
  declarations: [
    UploadDocumentsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class UploadDocumentsModule { }
