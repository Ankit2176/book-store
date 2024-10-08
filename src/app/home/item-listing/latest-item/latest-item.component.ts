import { Component } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-item',
  standalone: true,
  imports: [RouterLink],
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

  singleProductObj: any[] = []

  goToView(item: any) {

    this.singleProductObj = [];

    this.singleProductObj.push(item);

    localStorage.setItem('singleProduct', JSON.stringify(this.singleProductObj));
  }
}
