import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private readonly httpService: HttpService) {}

  public getProfessors(): Observable<any> {
    return this.httpService.get('professors/list');
  }

  public getDepartments(): Observable<any> {
    return this.httpService.get('departments/list');
  }

  public getSpecializations(): Observable<any> {
    return this.httpService.get('specializations/list');
  }

  public getDisciplines(): Observable<any> {
    return this.httpService.get('disciplines/list');
  }

  public getClasses(): Observable<any> {
    return this.httpService.get('classes/list');
  }

  public getStudents(): Observable<any> {
    return this.httpService.get('students/list');
  }
}
