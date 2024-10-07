import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop/shop.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsideShopComponent } from '../aside-shop/aside-shop.component';

@Component({
  selector: 'app-main-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-shop.component.html',
  styleUrl: './main-shop.component.css'
})
export class MainShopComponent implements OnInit {
  ShopObj: any[] = [];
  paginatedItems: any[] = [];
  pageSize: number = 8;
  pageIndex: number = 0;
  totalItems: number = 0;
  cartDataObj: any[] = [];
  sortKey: string = '';
  sortOrder: string = 'asc';

  searchTerm: string = '';



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

    // First, filter the items by search term
    let filteredItems = this.ShopObj.filter(item =>
      item.Head.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Then, sort the filtered items
    let sortedItems = this.sortItems(filteredItems);

    // Finally, paginate the sorted and filtered items
    this.paginatedItems = sortedItems.slice(startIndex, startIndex + this.pageSize);

    // Update totalItems to reflect the filtered items count
    this.totalItems = filteredItems.length;
  }


  sortItems(items: any[]): any[] {
    if (this.sortKey === '') {
      return items;
    }

    return items.sort((a, b) => {
      let valA = a[this.sortKey];
      let valB = b[this.sortKey];

      if (this.sortOrder === 'asc') {
        return valA > valB ? 1 : valA < valB ? -1 : 0;
      } else {
        return valA < valB ? 1 : valA > valB ? -1 : 0;
      }
    });
  }

  onSortChange(event: any) {
    const value = event.target.value;

    if (value.includes('Price')) {
      this.sortKey = 'Price';
    } else if (value.includes('Name')) {
      this.sortKey = 'Name';
    } else if (value.includes('Rating')) {
      this.sortKey = 'Rating';
    } else if (value.includes('Model')) {
      this.sortKey = 'Model';
    } else {
      this.sortKey = '';
    }

    this.sortOrder = value.includes('Price') ? 'desc' : 'asc';

    this.sortOrder = value.includes('Z - A') || value.includes('High') || value.includes('Lowest') ? 'desc' : 'asc';
    this.updatePaginatedItems();
  }

  onPageChange(page: number) {
    this.pageIndex = page;
    this.updatePaginatedItems();
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  getEndIndex(): number {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.totalItems);
  }
}
