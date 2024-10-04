import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-table',
  standalone: true,
  imports: [],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css'
})
export class CartTableComponent implements OnInit{

  constructor(private service: CartService ) {}

  cartDataObj : any;

  ngOnInit(): void {

    this.service.getData().subscribe((res:any)=>{

      this.cartDataObj = res.cartData;

    })

  }

}
