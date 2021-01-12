import { GradeService } from './../../../../../@core/api/grades.service';
import { AdminService } from './../../../../../@core/api/admin.service';
import { Component } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";

@Component({
  selector: "modal-content",
  template: `
    <StackLayout margin="24" horizontalAlignment="center" verticalAlignment="center">
        <ListPicker textField="user" valueField="id" [selectedValue]="studentId" height="400" [items]="students" selectedIndex="0" (selectedIndexChange)="onSelectedIndexChanged($event)"></ListPicker>
        <TextField hint="Nota" [(ngModel)]="grade"></TextField>

        <StackLayout orientation="horizontal" marginTop="12">
          <Button text="ok" (tap)="addGrade()"></Button>
          <Button text="cancel" (tap)="close()"></Button>
        </StackLayout>
    </StackLayout>
  `
})
export class AddGradeComponent {
  public examId: string;
  public disciplineId: string;
  public grade;
  public students;
  public studentId;
  private gradeId;

  constructor(private params: ModalDialogParams, private adminService: AdminService, private gradeService: GradeService) {
    this.examId = params.context.examId;
    this.disciplineId = params.context.disciplineId;
    this.gradeId = params.context.gradeId;

    this.adminService.getStudents().subscribe((students) => {
      this.students = students;
    })
  }

  public onSelectedIndexChanged(event) {
    this.studentId = this.students[event.value].id;
  }

  public addGrade() {
    if (this.gradeId) {
      const gradePayload = {
        mark: this.grade,
        exam: this.examId,
        student: this.studentId,
        id: this.gradeId
      }

      this.gradeService.createGrade(gradePayload).subscribe(() => this.close());
    } else {
      const gradePayload = {
        mark: this.grade,
        exam: this.examId,
        student: this.studentId
      }

      this.gradeService.createGrade(gradePayload).subscribe(() => this.close());
    }

  }

  public close() {
    this.params.closeCallback();
  }
}
