import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private token: String;
  header: any = {
    Authorization:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpc3VuMkBnbWFpbC5jb20iLCJpYXQiOjE2MTgyMzk3MTl9.T7p1YLWdN7nPiiLkuTrlsG6pzGXH4RQLzERWbeVmoY_iqlFT2o_R89TK6_kDNAtrpfNVPnchzALk_Lny7UEAi11AYi7KmP0rzBLkPCiqkVbZ1lSz7-TDYzJwt2B-1ENNzCE_yVPQOEFZvi30y_vW8SJ7FUUt3J1Nw7fNd-tA02M',
    'content-type': 'application/json',
  };
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    if (this.token != null) this.header.Authorization = this.token;
  }

  getCards(board_id, status: String) {
    return this.http.get(
      'http://localhost:3000/api/cards/b/' + board_id + '?status=' + status,
      {
        headers: this.header,
      }
    );
  }

  getCard(card_id) {
    return this.http.get('http://localhost:3000/api/cards/' + card_id, {
      headers: this.header,
    });
  }

  deleteCard(card_id) {
    return this.http.delete('http://localhost:3000/api/cards/' + card_id, {
      headers: this.header,
    });
  }

  createCard(data: any) {
    return this.http.post('http://localhost:3000/api/cards', data, {
      headers: this.header,
    });
  }
}
