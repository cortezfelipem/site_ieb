import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  vehicles = [
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
    },
    {
      url: '#',
      imageUrl: '../../../assets/img/santa_se_2.jpg',
      title: 'VOLKSWAGEN GOLF',
      version: '1.4 TSI HIGHLINE 16V GASOLINA 4P AUTOMÁTICO',
      price: 'R$ 74.890',
      year: '2015/2015',
      mileage: '97.298 km',
      location: 'Osasco - SP',
      isFavorite: true // You can set this based on user interaction
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
}
