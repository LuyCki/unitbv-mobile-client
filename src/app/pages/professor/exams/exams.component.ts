import { AddExamComponent } from './add-exam/add-exam.component';
import { ExamService } from './../../../@core/api/exam.service';
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogOptions, ModalDialogService, RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "Exams",
  templateUrl: "./exams.component.html"
})
export class ExamsComponent implements OnInit {
  public disciplineId;
  public exams;

  constructor(
    private _route: ActivatedRoute,
    private _routerExtensions: RouterExtensions,
    private examService: ExamService,
    private modalService: ModalDialogService,
    private viewContainerRef: ViewContainerRef
  ) { }

  public ngOnInit(): void {
    this.disciplineId = this._route.snapshot.params.disciplineId;
    this.getExams();
  }

  public onBackTap(): void {
    this._routerExtensions.back();
  }

  public goToGrades(examId): void {
    this._routerExtensions.navigate(["disciplines/grade", this.disciplineId, examId]);
  }

  public deleteExam(id) {
    this.examService.deleteExam(id).subscribe(() => {
      this.getExams();
    })
  }

  public editExam(id) {
    const options: ModalDialogOptions = {
      context: { disciplineId: this.disciplineId, examId: id },
      fullscreen: true,
      viewContainerRef: this.viewContainerRef
    };

    this.modalService.showModal(AddExamComponent, options).then(() => {
      this.getExams();
    });
  }

  public addExam(): void {
    const options: ModalDialogOptions = {
      context: { disciplineId: this.disciplineId },
      fullscreen: true,
      viewContainerRef: this.viewContainerRef
    };

    this.modalService.showModal(AddExamComponent, options).then(() => {
      this.getExams();
    });
  }

  private getExams() {
    this.examService.getExamsAtDiscipline(this.disciplineId).subscribe((exams) => this.exams = exams);
  }
}
