import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly host = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  public get(endpoint: string): Observable<any> {
    return this.http.get(`${this.host}${endpoint}`);
  }

  public post(endpoint: string, payload: any): Observable<any> {
    return this.http.post(`${this.host}${endpoint}`, payload);
  }

  public put(endpoint: string, payload: any): Observable<any> {
    return this.http.put(`${this.host}${endpoint}`, payload);
  }

  public patch(endpoint: string, payload: any): Observable<any> {
    return this.http.patch(`${this.host}${endpoint}`, payload);
  }

  public delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.host}${endpoint}`);
  }
}
