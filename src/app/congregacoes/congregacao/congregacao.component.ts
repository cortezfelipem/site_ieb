import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-congregacao',
  templateUrl: './congregacao.component.html',
  styleUrls: ['./congregacao.component.css']
})
export class CongregacaoComponent {
  nomeCongregacao: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Pega o nome da congregação da rota
    this.nomeCongregacao = this.route.snapshot.paramMap.get('nomeCongregacao');
  }
}
