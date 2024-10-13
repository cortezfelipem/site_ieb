import { Component } from '@angular/core';
import { DatasService } from 'src/app/shared/service/datas.service';

@Component({
  selector: 'app-datas-comemoradas',
  templateUrl: './datas-comemoradas.component.html',
  styleUrls: ['./datas-comemoradas.component.css']
})
export class DatasComemoradasComponent {
  dados: { [key: string]: any[] } = {};
  eventosPaginados: any[];
  currentPage = 1;
  meses: string[] = [];
  eventosPorMes: { [key: string]: any[] } = {};
  paginaAtual?: number;
  totalPaginas = 5;
  eventosPorPagina = 2;

  constructor(private dataService: DatasService) {
    this.eventosPaginados = [];
  }

  ngOnInit(): void {
    this.paginaAtual = this.obterMesAtual();
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      this.dados = data;
      this.meses = Object.keys(data); // Obtém os meses do seu objeto
      this.totalPaginas = Math.ceil(this.meses.length / this.eventosPorPagina);
      this.atualizarEventosPorMes();
    });
  }

  private atualizarEventosPorMes() {
    // Lógica para dividir os eventos por mês
    this.meses.forEach((mes) => {
      const eventos = this.dados[mes];
      // this.eventosPorMes[mes] = eventos;
      this.eventosPorMes[mes] = eventos.map(evento => {
        // Adiciona o número do aniversário ao título
        const aniversarioNumero = this.calcularNumeroAniversario(evento.dataISO);
        return {
          ...evento,
          titulo: `${aniversarioNumero}º ${evento.titulo}` // Formata o título com o número do aniversário
        };
      });
    });
  }

  private calcularNumeroAniversario(dataISO: string): number {
    if (!dataISO) return 0; // Retorna 0 se dataISO for nula

    const data = new Date(dataISO);
    const anoAtual = new Date().getFullYear();
    const numeroAniversario = anoAtual - data.getFullYear() + 1; // +1 para contar o ano atual
    return numeroAniversario;
  }

  onPageChange(pagina: number) {
    this.paginaAtual = pagina;
  }

  public obterMesAtual() {
    var dataAtual = new Date();
    var numeroMes = dataAtual.getMonth();
    var mesAtual = numeroMes + 1;
    return mesAtual;
  }
}