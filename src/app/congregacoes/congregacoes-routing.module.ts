import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongregacoesComponent } from './congregacoes/congregacoes.component';
import { CongregacaoComponent } from './congregacao/congregacao.component';

const routes: Routes = [
  { path: '', component: CongregacoesComponent },
  { path: ':nomeCongregacao', component: CongregacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongregacoesRoutingModule { }
