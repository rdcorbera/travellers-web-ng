import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { TravellersComponent } from './home/travellers/travellers.component';
import { TravelerDetailComponent } from './home/traveler-detail/traveler-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { UiComponentsModule } from 'ui-components';

@NgModule({
  declarations: [
    AppComponent,
    TravellersComponent,
    TravelerDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TransferHttpCacheModule,
    FormsModule,
    AppRoutingModule,
    UiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
