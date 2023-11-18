import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongregacoesComponent } from './congregacoes/congregacoes.component';
import { CongregacoesRoutingModule } from './congregacoes-routing.module';



@NgModule({
  declarations: [
    CongregacoesComponent
  ],
  imports: [
    CommonModule,CongregacoesRoutingModule
  ],
  exports: [
    CongregacoesComponent
  ]
})
export class CongregacoesModule { }
