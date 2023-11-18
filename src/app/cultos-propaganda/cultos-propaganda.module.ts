import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CultosPropagandaComponent } from './cultos-propaganda/cultos-propaganda.component';
import { CultosPropagandaRoutingModule } from './cultos-propaganda-routing.module';



@NgModule({
  declarations: [
    CultosPropagandaComponent
  ],
  imports: [
    CommonModule, CultosPropagandaRoutingModule
  ],
  exports: [
    CultosPropagandaComponent
  ]
})
export class CultosPropagandaModule { }
