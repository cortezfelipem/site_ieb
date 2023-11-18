import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongregacoesComponent } from './congregacoes/congregacoes.component';

const routes: Routes = [
  { path: '', component: CongregacoesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongregacoesRoutingModule { }
