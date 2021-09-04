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
}
