import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private token: String;

  constructor(private http: HttpClient) { }

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

  updateCard(card_id: String, data: any) {
    return this.http.put('http://localhost:3000/api/cards/' + card_id, data);
  }

  // ---------- Board Section ----------
  getBoards() {
    return this.http.get(`${baseUrl}api/boards`);
  }

  createBoard(data: any) {
    return this.http.post(`${baseUrl}api/boards`, data);
  }

  updateBoard(data: any) {
    return this.http.put(`${baseUrl}api/boards/${data.board_id}`, data);
  }

  deleteBoard(board_id: string) {
    return this.http.delete(`${baseUrl}api/boards/${board_id}`);
  }
}
