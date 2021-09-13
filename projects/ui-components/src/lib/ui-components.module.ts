import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './button/button.component';
import { Header } from './header/header.component';


@NgModule({
  declarations: [
    Button,
    Header
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Button,
    Header
  ]
})
export class UiComponentsModule { }
