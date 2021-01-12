import { HttpService } from './../../../@core/api/http.service';
import { Component } from "@angular/core";
import { Application } from "@nativescript/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as bghttp from '@nativescript/background-http';
import * as filepicker from "nativescript-plugin-filepicker";
import { knownFolders } from '@nativescript/core/file-system'
import { TNSHttpFormData, TNSHttpFormDataParam, TNSHttpFormDataResponse } from 'nativescript-http-formdata';

declare var java: any

@Component({
  selector: "UploadDocuments",
  templateUrl: "./upload-documents.component.html"
})
export class UploadDocumentsComponent {
  constructor(private http: HttpService) { }

  public onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }

  public pickFile(endpoint): void {
    const context = filepicker.create({
      mode: "single",
      extensions: ["csv"]
    });

    context
      .authorize()
      .then(() => {
        return context.present();
      })
      .then((selection) => {
        const file = selection[0].toString();
        this.uploadFile(file, endpoint)

      }).catch((e) => {
        console.log(e);
      });
  }

  // tslint:disable-next-line:ban-types
  private uploadFile(file: string, endpoint: string) {
    const fileName = file.substr(file.lastIndexOf("/") + 1);

    const request = {
      url: this.http.getHost() + endpoint,
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream"
      },
      description: "Uploading " + fileName
    };

    const session = bghttp.session('upload-file');
    session.multipartUpload([{ name: fileName, filename: file, mimeType: "text/csv"  }], request)
  }
}
