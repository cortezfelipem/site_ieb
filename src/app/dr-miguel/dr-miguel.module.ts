import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrMiguelComponent } from './dr-miguel/dr-miguel.component';
import { DrMiguelRoutingModule } from './dr-miguel-routing.module';



@NgModule({
  declarations: [
    DrMiguelComponent
  ],
  imports: [
    CommonModule, DrMiguelRoutingModule
  ]
})
export class DrMiguelModule { }
