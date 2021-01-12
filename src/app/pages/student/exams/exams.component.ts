import { ExamService } from './../../../@core/api/exam.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";

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
    private examService: ExamService
  ) { }

  public ngOnInit(): void {
    this.disciplineId = this._route.snapshot.params.disciplineId;
    this.getExams();
  }

  public onBackTap(): void {
    this._routerExtensions.back();
  }

  private getExams() {
    this.examService.getExamsAtDiscipline(this.disciplineId).subscribe((exams) => this.exams = exams);
  }
}
