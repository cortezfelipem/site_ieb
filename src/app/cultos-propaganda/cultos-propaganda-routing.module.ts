import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CultosPropagandaComponent } from './cultos-propaganda/cultos-propaganda.component';

const routes: Routes = [
  { path: '', component: CultosPropagandaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CultosPropagandaRoutingModule { }
