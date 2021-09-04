import { Injectable } from '@angular/core';
import { TravelerItem } from '../travellers/models/traveler-item';
import { TRAVELLERS } from '../mocks/travellers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {

  constructor() { }

  getTravellers(): Observable<TravelerItem[]> {
    return of(TRAVELLERS);
  }

  getTraveler(id: number): Observable<TravelerItem> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const traveler = TRAVELLERS.find(h => h.id === id)!;
    return of(traveler);
  }
}
