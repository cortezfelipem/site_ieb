import { Component } from '@angular/core';
import { CongregacoesService } from 'src/app/shared/service/congregacoes.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  congregacoes: any[] = [];

  constructor(private congregacoesService: CongregacoesService) {}

  ngOnInit(): void {
    this.congregacoesService.getCongregacoes().subscribe((data) => {
      this.congregacoes = data.estados;
      console.log(this.congregacoes)
    });
  }
  
  congregacoes1 = [
    {
      nome: 'Maranhão',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
    },
    {
      nome: 'Sede - São Paulo',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
    },
    {
      nome: 'Mogi Mirim',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
    },
    {
      nome: 'Paraná',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
    },
    {
      nome: 'Santa Sé',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
    },

    // Add more vehicle objects as needed
  ];
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-chevron-left left-i"></i>', '<i class="fas fa-chevron-right right-i"></i>'],
    center: true,
    items: 3,
    lazyLoad: true
  }

  noticias = [
    {
      nome: 'Sede - São Paulo',
    },
    {
      nome: 'Mogi Mirim',
    },
    {
      nome: 'Paraná',
    }

  ];

}
