import { Component, Input } from '@angular/core';
import { TravelerItem } from '../../../models/traveler-item';

@Component({
  selector: 'app-traveler-item',
  templateUrl: './traveler-item.component.html',
  styleUrls: ['./traveler-item.component.scss']
})
export class TravelerItemComponent {

  @Input() item?: TravelerItem;

  constructor() { }
}
