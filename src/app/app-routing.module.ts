import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from 'feature-activities';
import { TravelerDetailPage, TravellersPage } from 'feature-travellers';

const routes: Routes = [
  { path: 'activities', component: DashboardPage },
  { path: 'travellers', component: TravellersPage },
  { path: 'travellers/detail/:id', component: TravelerDetailPage },
  { path: '', redirectTo: '/activities', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
