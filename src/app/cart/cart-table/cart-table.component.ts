import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.css'
})
export class CartTableComponent implements OnInit {

  constructor(private service: CartService) { }

  cartDataObj: any[] = [];

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cartDataObj = JSON.parse(cartData);
    }
  }

  increaseQuantity(index: number) {
    this.cartDataObj[index].quantity = (this.cartDataObj[index].quantity || 1) + 1;
  }

  decreaseQuantity(index: number) {
    if (this.cartDataObj[index].quantity > 1) {
      this.cartDataObj[index].quantity--;
    }
  }

  updateQuantity(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value);

    if (!isNaN(value) && value > 0) {
      this.cartDataObj[index].quantity = value;
    } else {

      this.cartDataObj[index].quantity = 1;
    }
  }

  getTotalPrice(index: any): any {
    return (this.cartDataObj[index].Price * (this.cartDataObj[index].quantity || 1)).toFixed(2);
  }

  getSubtotal(): number {
    return this.cartDataObj.reduce((total, item) => {
      return total + (item.Price * (item.quantity || 1));
    }, 0);
  }

  removeFromCart(index: number) {

    this.cartDataObj.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(this.cartDataObj));
  }

}
