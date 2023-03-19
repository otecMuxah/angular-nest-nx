import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT, Environment } from '@test-repo-na/ui/shared/env';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiBaseService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.env.API_URL + url);
  }

  post<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(this.env.API_URL + url, body);
  }
}
