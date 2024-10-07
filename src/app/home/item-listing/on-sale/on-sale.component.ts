import { Component } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-on-sale',
  standalone: true,
  imports: [],
  templateUrl: './on-sale.component.html',
  styleUrl: './on-sale.component.css'
})
export class OnSaleComponent {

  OnSaleObj: any


  /**
   *
   */
  constructor(private Services: HomeService) {


  }



  ngOnInit(): void {


    this.Services.getData().subscribe((res: any) => {

      this.OnSaleObj = res.OnSaleObj
    })

  }
}
