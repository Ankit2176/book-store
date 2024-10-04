import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-single-page-related-item',
  standalone: true,
  imports: [],
  templateUrl: './single-page-related-item.component.html',
  styleUrl: './single-page-related-item.component.css'
})
export class SinglePageRelatedItemComponent implements AfterViewInit {

  ngAfterViewInit() {
    const productSwiper = new Swiper('.product-swiper', {
      spaceBetween: 20,
      navigation: {
        nextEl: '.product-slider-button-next',
        prevEl: '.product-slider-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        660: {
          slidesPerView: 3,
        },
        980: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 5,
        },
      },
    });
  }
}