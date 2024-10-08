import { Component, AfterViewInit, Inject } from '@angular/core';
import Swiper from 'swiper'; // Updated import for Swiper 10 and above
import { DOCUMENT } from '@angular/common';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { HomeService } from '../../services/home/home.service';
import { RouterLink } from '@angular/router';
// Updated import for Swiper 10 and above

@Component({
  selector: 'app-best-selling-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './best-selling-item.component.html',
  styleUrls: ['./best-selling-item.component.css'], // Corrected from styleUrl to styleUrls
})
export class BestSellingItemComponent implements AfterViewInit {
  bestSellItem: any;
  cartDataObj: any[] = [];
  wishlistCount: any[] = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private Services: HomeService
  ) {}

  ngOnInit(): void {
    this.Services.getData().subscribe((res: any) => {
      this.bestSellItem = res.bestSellItemObj;
    });
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

  addToCart(item: any) {
    const existingCart = localStorage.getItem('cart');
    this.cartDataObj = existingCart ? JSON.parse(existingCart) : [];
    this.cartDataObj.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cartDataObj));
  }

  addToWishlist(item: any) {
    const existingWishlist = localStorage.getItem('wishlistProducts');
    this.cartDataObj = existingWishlist ? JSON.parse(existingWishlist) : [];
    this.cartDataObj.push(item);
    localStorage.setItem('wishlistProducts', JSON.stringify(this.cartDataObj));
  }
}
