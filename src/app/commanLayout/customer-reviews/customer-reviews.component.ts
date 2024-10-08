import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
import { Swiper } from 'swiper';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css'] // Updated from styleUrl to styleUrls
})
export class CustomerReviewsComponent implements OnInit, AfterViewInit {

  CusReviewsObj: any;

  constructor(private Services: HomeService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.Services.getData().subscribe((res: any) => {
      this.CusReviewsObj = res.CusReviewsObj;
    });
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.testimonial-button-next',
          prevEl: '.testimonial-button-prev',
        },
      });
    }
  }
}
