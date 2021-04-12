import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  header: any = {
    Authorization:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpc3VuMkBnbWFpbC5jb20iLCJpYXQiOjE2MTgyMzk3MTl9.T7p1YLWdN7nPiiLkuTrlsG6pzGXH4RQLzERWbeVmoY_iqlFT2o_R89TK6_kDNAtrpfNVPnchzALk_Lny7UEAi11AYi7KmP0rzBLkPCiqkVbZ1lSz7-TDYzJwt2B-1ENNzCE_yVPQOEFZvi30y_vW8SJ7FUUt3J1Nw7fNd-tA02M',
    'content-type': 'application/json',
  };
  constructor(private http: HttpClient) {}

  getCards() {
    return this.http.get('http://localhost:3000/api/cards', {
      headers: this.header,
    });
  }
}
