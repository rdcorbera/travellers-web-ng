import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravellersComponent } from './home/travellers/travellers.component';
import { TravelerDetailComponent } from './home/traveler-detail/traveler-detail.component';

const routes: Routes = [
  { path: 'home', component: TravellersComponent },
  { path: 'detail/:id', component: TravelerDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
