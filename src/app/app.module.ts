import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { UiComponentsModule } from 'ui-components';

import { AppComponent } from './app.component';
import { FeatureActivitiesModule } from 'feature-activities';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TransferHttpCacheModule,
    FormsModule,
    AppRoutingModule,
    UiComponentsModule,
    FeatureActivitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
