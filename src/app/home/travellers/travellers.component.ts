import { Component, OnInit } from '@angular/core';
import { TravelerService } from '../services/traveler.service';
import { TravelerItem } from './models/traveler-item';

@Component({
  selector: 'app-travellers',
  templateUrl: './travellers.component.html',
  styleUrls: ['./travellers.component.scss']
})
export class TravellersComponent implements OnInit {

  travellers: TravelerItem[] = [];

  selectedItem?: TravelerItem;

  constructor(private travellerService: TravelerService) { }

  ngOnInit(): void {
    this.getTravellers();
  }

  onSelect(item: TravelerItem): void {
    this.selectedItem = item;
  }

  getTravellers(): void {
    this.travellerService.getTravellers().subscribe(list => this.travellers = list);
  }
}
