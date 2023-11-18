import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasComemoradasComponent } from './datas-comemoradas/datas-comemoradas.component';
import { DatasComemoradasRoutingModule } from './datas-comemoradas-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    DatasComemoradasComponent
  ],
  imports: [
    CommonModule, DatasComemoradasRoutingModule, NgxPaginationModule
  ],
  exports: [
    DatasComemoradasComponent, NgxPaginationModule
  ]
})
export class DatasComemoradasModule { }
