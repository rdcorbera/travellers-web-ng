import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TravelerItem } from '../travellers/models/traveler-item';
import { TravelerService } from '../services/traveler.service';

@Component({
  selector: 'app-traveler-detail',
  templateUrl: './traveler-detail.component.html',
  styleUrls: ['./traveler-detail.component.scss']
})
export class TravelerDetailComponent implements OnInit {

  @Input() selectedItem?: TravelerItem;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private travelerService: TravelerService
  ) { }

  ngOnInit(): void {
    this.getTraveler();
  }

  getTraveler(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.travelerService.getTraveler(id)
      .subscribe(traveler => this.selectedItem = traveler);
  }
}
