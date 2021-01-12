import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  constructor(private readonly httpService: HttpService) {}

  public getGrade(): Observable<any> {
    return this.httpService.get('grades/list');
  }

  public getGradeAtExam(disciplineId, examId): Observable<any> {
    return this.httpService.get(`grades/list?discipline_id=${disciplineId}&exam_id=${examId}`);
  }

  public createGrade(payload): Observable<any> {
    return this.httpService.post('grades/create', payload);
  }

  public deleteGrade(gradeId): Observable<any> {
    return this.httpService.post(`grades/delete?grade_id=${gradeId}`, {});
  }
}
