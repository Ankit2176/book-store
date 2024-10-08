import { Component } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-on-sale',
  standalone: true,
  imports: [RouterLink],
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

  
  singleProductObj:any[]=[]

  goToView(item: any) {
    this.singleProductObj = [];

    this.singleProductObj.push(item);

    localStorage.setItem('singleProduct', JSON.stringify(this.singleProductObj));
}
}
