import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongregacoesComponent } from './congregacoes/congregacoes.component';
import { CongregacoesRoutingModule } from './congregacoes-routing.module';
import { CongregacaoComponent } from './congregacao/congregacao.component';



@NgModule({
  declarations: [
    CongregacoesComponent,
    CongregacaoComponent
  ],
  imports: [
    CommonModule,CongregacoesRoutingModule
  ],
  exports: [
    CongregacoesComponent
  ]
})
export class CongregacoesModule { }
