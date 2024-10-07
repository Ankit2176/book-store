import { Component } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-latest-item',
  standalone: true,
  imports: [],
  templateUrl: './latest-item.component.html',
  styleUrl: './latest-item.component.css'
})
export class LatestItemComponent {

  LatestItemObj: any


  /**
   *
   */
  constructor(private Services: HomeService) {


  }



  ngOnInit(): void {


    this.Services.getData().subscribe((res: any) => {

      this.LatestItemObj = res.LatestItemObj
    })

  }
}
