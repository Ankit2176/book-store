import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>("assets/json/shop.json")
  }


  private productDetails = 'cartItems';

  // Get the cart items from local storage

  addToCart(item: any) {
    let cart = this.getCart();
    cart.push(item);
    localStorage.setItem(this.productDetails, JSON.stringify(cart));
  }

  getCart() {
    const cart = localStorage.getItem(this.productDetails);
    return cart ? JSON.parse(cart) : [];
  }

  clearCart() {
    localStorage.removeItem(this.productDetails);
  }
}


