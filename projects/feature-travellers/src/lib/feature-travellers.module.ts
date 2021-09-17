import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from 'ui-components';
import { TravelerDetailPage } from './pages/traveler-detail/traveler-detail.page';
import { TravelerItemComponent } from './pages/travellers/traveler-item/traveler-item.component';
import { TravellersPage } from './pages/travellers/travellers.page';



@NgModule({
  declarations: [
    TravellersPage,
    TravelerItemComponent,
    TravelerDetailPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiComponentsModule
  ],
  exports: [
    
  ]
})
export class FeatureTravellersModule { }
