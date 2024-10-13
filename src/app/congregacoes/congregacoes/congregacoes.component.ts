import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CongregacoesService } from 'src/app/shared/service/congregacoes.service';

@Component({
  selector: 'app-congregacoes',
  templateUrl: './congregacoes.component.html',
  styleUrls: ['./congregacoes.component.css']
})
export class CongregacoesComponent {
  estados: any[] = [];
  users: any[] = [];

  constructor(
    private congregacoesService: CongregacoesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.congregacoesService.getCongregacoes().subscribe((data) => {
      this.estados = data.estados;
    });
    this.congregacoesService.getUsers().subscribe((data) => {
      console.log(data)
      this.users = data.user;
    });
  }
  calcularTotalCidades(): number {
    let totalCidades = 0;

    this.estados.forEach((estado) => {
      totalCidades += estado.cidades.length;
      console.log(totalCidades)
    });

    return totalCidades;
  }

  selecionarCongregacao(nomeCongregacao: string) {
    // Navega para a rota com o nome da congregação como parâmetro
    this.router.navigate([nomeCongregacao], { relativeTo: this.router.routerState.root.firstChild });
  }

}
