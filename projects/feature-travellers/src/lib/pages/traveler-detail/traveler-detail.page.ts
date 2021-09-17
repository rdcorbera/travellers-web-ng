import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TravelerItem } from '../../models/traveler-item';
import { TravelerService } from '../../services/traveler.service';

@Component({
  selector: 'app-traveler-detail',
  templateUrl: './traveler-detail.page.html',
  styleUrls: ['./traveler-detail.page.scss']
})
export class TravelerDetailPage implements OnInit {

  selectedItem?: TravelerItem;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private travelerService: TravelerService
  ) {}

  ngOnInit(): void {
    this.getTraveler();
  }

  getTraveler(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.travelerService.getTraveler(id)
      .subscribe(traveler => this.selectedItem = traveler);
  }
}
