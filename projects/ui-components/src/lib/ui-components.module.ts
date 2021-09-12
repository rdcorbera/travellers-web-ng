import { NgModule } from '@angular/core';
import { UiComponentsComponent } from './ui-components.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UiComponentsComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponentsComponent,
    ButtonComponent
  ]
})
export class UiComponentsModule { }
