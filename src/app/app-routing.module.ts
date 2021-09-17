import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravellersComponent } from './home/travellers/travellers.component';
import { TravelerDetailComponent } from './home/traveler-detail/traveler-detail.component';
import { DashboardPage } from 'feature-activities';

const routes: Routes = [
  { path: 'activities', component: DashboardPage },
  { path: 'travellers', component: TravellersComponent },
  { path: 'travellers/detail/:id', component: TravelerDetailComponent },
  { path: '', redirectTo: '/activities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
