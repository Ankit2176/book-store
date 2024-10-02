import { Component } from '@angular/core';
import { BillboardCartComponent } from "../billboard-cart/billboard-cart.component";
import { CartTableComponent } from "../cart-table/cart-table.component";
import { CartTotalComponent } from "../cart-total/cart-total.component";

@Component({
  selector: 'app-cart-layout',
  standalone: true,
  imports: [BillboardCartComponent, CartTableComponent, CartTotalComponent],
  templateUrl: './cart-layout.component.html',
  styleUrl: './cart-layout.component.css'
})
export class CartLayoutComponent {

}
