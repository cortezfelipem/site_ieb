import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatasComemoradasComponent } from './datas-comemoradas/datas-comemoradas.component';

const routes: Routes = [
  { path: '', component: DatasComemoradasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasComemoradasRoutingModule { }
