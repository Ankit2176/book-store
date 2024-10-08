import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent implements OnInit {



  cartDObj: any[] = []



  ngOnInit(): void {
    this.getSubtotal()
  }



  getTotalPrice(index: any): any {
    return (this.cartDObj[index].Price * (this.cartDObj[index].quantity || 1)).toFixed(2);
  }
  getSubtotal(): any {

    const cartData = localStorage.getItem('cart');

    if (cartData) {
      this.cartDObj = JSON.parse(cartData);
    }

    return this.cartDObj.reduce((total, item) => {
      return total + (item.Price * (item.quantity || 1));
    }, 0);
  }

}
