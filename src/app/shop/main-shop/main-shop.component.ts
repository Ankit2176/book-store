import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ShopService } from '../../services/shop/shop.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-shop.component.html',
  styleUrl: './main-shop.component.css'
})
export class MainShopComponent implements OnInit {
  ShopObj: any;
  paginatedItems: any[] = [];
  pageSize: number = 8; // Number of items per page
  pageIndex: number = 0; // Current page index
  totalItems: number = 0; // Total number of items
  cartDataObj: any[] = [];

  constructor(private Services: ShopService) { }

  ngOnInit(): void {
    this.Services.getData().subscribe((res: any) => {
      this.ShopObj = res.ShopObj;
      this.totalItems = this.ShopObj.length;
      this.updatePaginatedItems();
    });
  }

  addToCart(item: any) {
    // Retrieve the existing cart data from local storage
    const existingCart = localStorage.getItem('cart');

    // Parse the existing cart data or initialize an empty array if none exists
    this.cartDataObj = existingCart ? JSON.parse(existingCart) : [];

    // Add the new item to the cart array
    this.cartDataObj.push(item);

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(this.cartDataObj));
  }

  updatePaginatedItems() {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedItems = this.ShopObj.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(page: number) {
    this.pageIndex = page;
    this.updatePaginatedItems();
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize); // Use Math.ceil directly
  }

  getEndIndex(): number {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.totalItems);
  }
}
