import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrMiguelComponent } from './dr-miguel/dr-miguel.component';

const routes: Routes = [
  { path: '', component: DrMiguelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrMiguelRoutingModule { }
