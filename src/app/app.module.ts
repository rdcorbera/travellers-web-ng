import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TravellersComponent } from './home/travellers/travellers.component';
import { TravelerDetailComponent } from './home/traveler-detail/traveler-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TravellersComponent,
    TravelerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
