import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  congregacoes = [
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
    navText: ['Anterior' ,  'Proximo'],
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
    },
    {
      nome: 'Santa Sé',
    },

  ];

}
