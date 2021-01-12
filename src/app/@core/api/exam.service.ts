import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  constructor(private readonly httpService: HttpService) {}

  public getExams(): Observable<any> {
    return this.httpService.get('exams/list');
  }

  public getExamsAtDiscipline(disciplineId): Observable<any> {
    return this.httpService.get(`exams/list?discipline_id=${disciplineId}`);
  }

  public createExam(payload): Observable<any> {
    return this.httpService.post('exams/create', payload);
  }

  public deleteExam(examId): Observable<any> {
    return this.httpService.post(`exams/delete?exam_id=${examId}`, {});
  }
}
