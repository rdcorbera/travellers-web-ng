import { NgModule } from '@angular/core';
import { UiComponentsModule } from 'ui-components';
import { DashboardPage } from './pages/dashboard/dashboard.page';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    UiComponentsModule
  ],
  exports: [
    DashboardPage
  ]
})
export class FeatureActivitiesModule { }
