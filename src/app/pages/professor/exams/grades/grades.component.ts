import { GradeService } from './../../../../@core/api/grades.service';
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogOptions, ModalDialogService, RouterExtensions } from "@nativescript/angular";
import { AddGradeComponent } from './add-grade/add-grade.component';

@Component({
  selector: "Grades",
  templateUrl: "./Grades.component.html"
})
export class GradesComponent implements OnInit {
  public examId;
  public disciplineId;
  public grades;

  constructor(
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions,
    private gradeService: GradeService,
    private modalService: ModalDialogService,
    private viewContainerRef: ViewContainerRef
  ) { }

  public ngOnInit(): void {
    this.examId = this._route.snapshot.params.examId;
    this.disciplineId = this._route.snapshot.params.disciplineId;
    this.getGrades();
  }

  public onBackTap(): void {
    this._routerExtensions.back();
  }

  public addGrade(): void {
    const options: ModalDialogOptions = {
      context: { examId: this.examId, disciplineId: this.disciplineId },
      fullscreen: true,
      viewContainerRef: this.viewContainerRef
    };

    this.modalService.showModal(AddGradeComponent, options).then(() => {
      this.getGrades();
    });
  }

  public editGrade(id) {
    const options: ModalDialogOptions = {
      context: { examId: this.examId, disciplineId: this.disciplineId, gradeId: id },
      fullscreen: true,
      viewContainerRef: this.viewContainerRef
    };

    this.modalService.showModal(AddGradeComponent, options).then(() => {
      this.getGrades();
    });
  }

  public deleteGrade(id) {
    this.gradeService.deleteGrade(id).subscribe(() => this.getGrades());
  }

  private getGrades() {
    this.gradeService.getGradeAtExam(this.disciplineId, this.examId).subscribe((grades) => this.grades = grades);
  }
}
