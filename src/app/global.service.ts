import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(private Http: HttpClient) { }

  get(path): Observable<any> {
    return this.Http.get(path).pipe(
      map(this.extractData));;
  }

  put(path,data): Observable<any> {
    return this.Http.put(path,data).pipe(
      map(this.extractData));;
  }

  post(path, data): Observable<any> {
    return this.Http.post<any>(path, data);
  }

  delete(path): Observable<any> {
    return this.Http.delete(path).pipe(
      map(this.extractData));;
  }
}
