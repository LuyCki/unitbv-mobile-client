import { ExamService } from './../../../../@core/api/exam.service';
import { Component } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";

@Component({
  selector: "modal-content",
  template: `
    <StackLayout margin="24" horizontalAlignment="center" verticalAlignment="center">
      <DatePicker
        [day]="day"
        [month]="month"
        [year]="year"
        (dayChange)="onDayChanged($event)"
        (monthChange)="onMonthChanged($event)"
        (yearChange)="onYearChanged($event)"
        verticalAlignment="center">
      </DatePicker>

      <TimePicker
        minuteInterval="5"
        [minute]="minute"
        [hour]="hour"
        (minuteChange)="onMinuteChanged($event)"
        (hourChange)="onHourChanged($event)">
      </TimePicker>

      <StackLayout orientation="horizontal" marginTop="12">
        <Button text="ok" (tap)="addExam()"></Button>
        <Button text="cancel" (tap)="close()"></Button>
      </StackLayout>
    </StackLayout>
  `
})
export class AddExamComponent {
  private disciplineId: string;
  private examId;
  public day = 1;
  public month = 1;
  public year = 2021;
  public minute = 10;
  public hour = 12;

  constructor(private params: ModalDialogParams, private examService: ExamService) {
    this.disciplineId = params.context.disciplineId;
    this.examId = params.context.examId;
  }

  public onDayChanged(event) {
    this.day = event.value;
  }

  public onMonthChanged(event) {
    this.month = event.value;
  }

  public onYearChanged(event) {
    this.year = event.value;
  }

  public onMinuteChanged(event) {
    this.minute = event.value;
  }

  public onHourChanged(event) {
    this.hour = event.value;
  }

  public addExam() {
    if (this.examId) {
      const examPayload = {
        examDate: new Date(this.year, this.month - 1, this.day, this.hour, this.minute).getTime(),
        discipline: this.disciplineId,
        id: this.examId
      }
      this.examService.createExam(examPayload).subscribe(() => this.close());
    } else {
      const examPayload = {
        examDate: new Date(this.year, this.month - 1, this.day, this.hour, this.minute).getTime(),
        discipline: this.disciplineId
      }
      this.examService.createExam(examPayload).subscribe(() => this.close());
    }

  }

  public close() {
    this.params.closeCallback();
  }
}
