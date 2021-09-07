import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TravelerItem } from '../travellers/models/traveler-item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {

  private travellersUrl = 'http://localhost:3100/api/travellers';

  constructor(
    private http: HttpClient,
  ) { }

  getTravellers(): Observable<TravelerItem[]> {
    return this.http.get<TravelerItem[]>(this.travellersUrl);
  }

  getTraveler(id: number): Observable<TravelerItem> {
    const url = `${this.travellersUrl}/${id}`;
    return this.http.get<TravelerItem>(url);
  }
}
