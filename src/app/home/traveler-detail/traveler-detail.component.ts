import { Component, Input, OnInit } from '@angular/core';
import { TravelerItem } from '../travellers/models/traveler-item';

@Component({
  selector: 'app-traveler-detail',
  templateUrl: './traveler-detail.component.html',
  styleUrls: ['./traveler-detail.component.scss']
})
export class TravelerDetailComponent implements OnInit {

  @Input() selectedItem?: TravelerItem;

  constructor() { }

  ngOnInit(): void {
  }

}
