import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './button/button.component';
import { Header } from './header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    Button,
    Header
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Button,
    Header
  ]
})
export class UiComponentsModule { }
