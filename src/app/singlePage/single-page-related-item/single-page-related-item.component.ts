import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import Swiper from 'swiper/bundle';
import { HomeService } from '../../services/home/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-page-related-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-page-related-item.component.html',
  styleUrl: './single-page-related-item.component.css'
})
export class SinglePageRelatedItemComponent implements AfterViewInit {

  bestSellItem: any
  singleProductObj: any[] = []
  /**
   *
   */
  constructor(@Inject(DOCUMENT) private document: Document, private Services: HomeService) {


  }

  ngOnInit(): void {


    this.Services.getData().subscribe((res: any) => {

      this.bestSellItem = res.bestSellItemObj
    })

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
  goToView(item: any) {
    this.singleProductObj = [];

    this.singleProductObj.push(item);

    localStorage.setItem('singleProduct', JSON.stringify(this.singleProductObj));
  }

}