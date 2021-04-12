import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private token: String;
  header: any = {
    Authorization:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBpc3VuMkBnbWFpbC5jb20iLCJpYXQiOjE2MTgyNjEyMjl9.EuoxCpBHL1mLgqmnvO8oAGe0DBh_COAc6SEE5Hhm9--R_wWhGLyB_aQ63KZcXvEUPAjEZ87w2azwaVsETLATvR5YQgIOIjJ2OkhYyq3pusHMx8ex5wdDTLQK890cTaOaWp7By3nUI1yzLABjRSpHR2q1ivXAQa7wESwMIaTIsNU',
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

  updateCard(card_id: String, data: any) {
    return this.http.post('http://localhost:3000/api/cards/' + card_id, data, {
      headers: this.header,
    });
  }

  getBoards() {
    return this.http.get('http://localhost:3000/api/boards', {
      headers: this.header,
    });
  }
}
