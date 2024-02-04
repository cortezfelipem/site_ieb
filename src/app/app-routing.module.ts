import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'header',
    loadChildren: () =>
      import('./header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'congregacoes',
    loadChildren: () => import('./congregacoes/congregacoes.module').then(m => m.CongregacoesModule)
  },
  {
    path: 'cultos-propaganda',
    loadChildren: () => import('./cultos-propaganda/cultos-propaganda.module').then(m => m.CultosPropagandaModule)
  },
  {
    path: 'datas-comemoradas',
    loadChildren: () => import('./datas-comemoradas/datas-comemoradas.module').then(m => m.DatasComemoradasModule)
  },
  {
    path: 'rev-israel',
    loadChildren: () => import('./rev-israel/rev-israel.module').then(m => m.RevIsraelModule)
  },
  {
    path: 'dr-miguel',
    loadChildren: () => import('./dr-miguel/dr-miguel.module').then(m => m.DrMiguelModule)
  },
];
// const routerOptions: ExtraOptions = {
//   enableTracing: true, // Ativa o modo de depuração do roteamento
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}