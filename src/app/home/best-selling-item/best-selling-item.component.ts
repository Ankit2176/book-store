import { Component, AfterViewInit, Inject } from '@angular/core';
import Swiper from 'swiper'; // Updated import for Swiper 10 and above
import { DOCUMENT } from '@angular/common';
// Updated import for Swiper 10 and above



@Component({
  selector: 'app-best-selling-item',
  standalone: true,
  templateUrl: './best-selling-item.component.html',
  styleUrls: ['./best-selling-item.component.css'] // Corrected from styleUrl to styleUrls
})
export class BestSellingItemComponent implements AfterViewInit {


  /**
   *
   */
  constructor(@Inject(DOCUMENT) private document: Document) {

  }
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
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
}