import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { CongregacoesModule } from './congregacoes/congregacoes.module';
import { RouterModule } from '@angular/router';
import { CultosPropagandaModule } from './cultos-propaganda/cultos-propaganda.module';
import { DatasComemoradasModule } from './datas-comemoradas/datas-comemoradas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FooterModule,
    HomeModule,
    CongregacoesModule,
    CultosPropagandaModule,
    DatasComemoradasModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
