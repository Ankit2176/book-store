import { Component, AfterViewInit, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper'; // Updated import for Swiper 10 and above
import { DOCUMENT } from '@angular/common';
import { HomeService } from '../../services/home/home.service';


@Component({
  selector: 'app-billboard-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './billboard-slider.component.html',
  styleUrls: ['./billboard-slider.component.css']
})
export class BillboardSliderComponent implements AfterViewInit {
  BillBoardObj: any
  /**
   *
   */
  constructor(@Inject(DOCUMENT) private document: Document, private Services: HomeService) {


  }

  ngOnInit(): void {


    this.Services.getData().subscribe((res: any) => {

      this.BillBoardObj = res.BillBoardObj
    })

  }

  ngAfterViewInit() {

    if (typeof document !== 'undefined') {
      const mainSwiper = new Swiper('.main-swiper', {
        speed: 500,
        navigation: {
          nextEl: '.main-slider-button-next',
          prevEl: '.main-slider-button-prev',
        },
      });
    }
  }
}
