import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  headers: HttpHeaders;
  emitter = new EventEmitter<any>();

  emitValue(data: any) {
    this.emitter.emit(data);
  }

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  signIn(data: any): Observable<any> {
    return this.http.post(`${baseUrl}auth/login`, data);
  }

  signUp(data): Observable<any> {
    let api = `${baseUrl}/auth/signup`;
    return this.http.post(api, data).pipe(catchError(this.handleError));
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
