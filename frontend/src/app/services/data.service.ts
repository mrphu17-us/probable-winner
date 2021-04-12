import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private token: String;

  constructor(private http: HttpClient) {}

  getCards(board_id, status: String) {
    return this.http.get(
      `${baseUrl}api/cards/b/` + board_id + '?status=' + status
    );
  }

  getCard(card_id) {
    return this.http.get(`${baseUrl}api/cards/` + card_id);
  }

  deleteCard(card_id) {
    return this.http.delete(`${baseUrl}api/cards/` + card_id);
  }

  createCard(data: any) {
    return this.http.post(`${baseUrl}api/cards`, data);
  }

  getBoards() {
    return this.http.get(`${baseUrl}api/boards`);
  }
}
