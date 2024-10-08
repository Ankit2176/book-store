import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-reviewed',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './best-reviewed.component.html',
  styleUrl: './best-reviewed.component.css'
})
export class BestReviewedComponent implements OnInit {


  bestReviewedObj: any

  /**
   *
   */
  constructor(private Services: HomeService) {


  }

  ngOnInit(): void {
    this.Services.getData().subscribe((res: any) => {
      this.bestReviewedObj = res.bestReviewedObj
    })

  }

  singleProductObj: any[] = []

  goToView(item: any) {

    this.singleProductObj = [];

    this.singleProductObj.push(item);

    localStorage.setItem('singleProduct', JSON.stringify(this.singleProductObj));
  }

}
