import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'https://localhost:44376/api/Game'; // Update based on your API URL

  constructor(private http: HttpClient) { }

  resetGame(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reset`);
  }

  attack(x: number, y: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/attack`, { X: x, Y: y });
  }
}

