import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SearchPopupComponent } from '../search-popup/search-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, SearchPopupComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @ViewChild(SearchPopupComponent) searchPopup!: SearchPopupComponent;
  cartDataObj: any[] = [];
  wishlistDataObj: any[] = [];
  totalCount: any;
  wishlistCount:any;

  ngOnInit(): void {
    this.loadCartItems();
    this.loadWishlistItems();
  }

  loadCartItems() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cartDataObj = JSON.parse(cartData);
    }
    this.totalCount = this.cartDataObj.length;
  }

  loadWishlistItems() {
    const wishlistData = localStorage.getItem('wishlistProducts');
    if (wishlistData) {
      this.wishlistDataObj = JSON.parse(wishlistData);
    }
    this.wishlistCount = this.wishlistDataObj.length;
  }

  addToCart(item: any) {
    const existingCart = localStorage.getItem('cart');
    this.cartDataObj = existingCart ? JSON.parse(existingCart) : [];
    this.cartDataObj.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cartDataObj));
  }

  addAllToCart() {
    const existingCart = localStorage.getItem('cart');
    this.cartDataObj = existingCart ? JSON.parse(existingCart) : [];
    this.cartDataObj.push(...this.wishlistDataObj);
    localStorage.setItem('cart', JSON.stringify(this.cartDataObj));
  }

  getWishlisttotal(): number {
    return this.wishlistDataObj.reduce((total, item) => {
      return total + item.Price * (item.quantity || 1); // Multiply price by quantity
    }, 0);
  }

  getSubtotal(): number {
    return this.cartDataObj.reduce((total, item) => {
      return total + item.Price * (item.quantity || 1); // Multiply price by quantity
    }, 0);
  }
}
