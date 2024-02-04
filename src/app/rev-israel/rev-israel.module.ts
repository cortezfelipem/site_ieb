import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevIsraelComponent } from './rev-israel/rev-israel.component';
import { RevIsraelRoutingModule } from './rev-israel-routing.module';



@NgModule({
  declarations: [
    RevIsraelComponent
  ],
  imports: [
    CommonModule, RevIsraelRoutingModule
  ]
})
export class RevIsraelModule { }
