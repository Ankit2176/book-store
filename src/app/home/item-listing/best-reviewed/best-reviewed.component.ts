import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-best-reviewed',
  standalone: true,
  imports: [],
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
      debugger;
      this.bestReviewedObj = res.bestReviewedObj
    })

  }

}
