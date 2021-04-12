import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  header: any = {
    Authorization:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpc3VuMkBnbWFpbC5jb20iLCJpYXQiOjE2MTgyNjEyMjl9.EuoxCpBHL1mLgqmnvO8oAGe0DBh_COAc6SEE5Hhm9--R_wWhGLyB_aQ63KZcXvEUPAjEZ87w2azwaVsETLATvR5YQgIOIjJ2OkhYyq3pusHMx8ex5wdDTLQK890cTaOaWp7By3nUI1yzLABjRSpHR2q1ivXAQa7wESwMIaTIsNU',
    'content-type': 'application/json',
  };
  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get('http://localhost:3000/api/cards', {
      headers: this.header,
    });
  }

  getBoards() {
    return this.http.get('http://localhost:3000/api/baords', {
      headers: this.header,
    });
  }
}
