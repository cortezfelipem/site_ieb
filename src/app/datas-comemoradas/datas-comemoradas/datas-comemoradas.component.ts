import { Component } from '@angular/core';
import { DatasService } from 'src/app/shared/service/datas.service';

@Component({
  selector: 'app-datas-comemoradas',
  templateUrl: './datas-comemoradas.component.html',
  styleUrls: ['./datas-comemoradas.component.css']
})
export class DatasComemoradasComponent {
  dados: { [key: string]: any[] } = {};
  // eventosPorMes: any[];
  eventosPaginados: any[];
  currentPage = 1;
  meses: string[] = [];
  eventosPorMes: { [key: string]: any[] } = {};
  paginaAtual?: number;
  totalPaginas = 5;
  eventosPorPagina = 2;

  constructor(private dataService: DatasService) {
    // this.eventosPorMes = [];
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
      this.eventosPorMes[mes] = eventos;
    });
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