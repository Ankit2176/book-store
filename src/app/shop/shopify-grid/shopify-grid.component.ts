import { Component } from '@angular/core';
import { ShopService } from '../../services/shop/shop.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopify-grid',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './shopify-grid.component.html',
  styleUrl: './shopify-grid.component.css',
})
export class ShopifyGridComponent {
  ShopObj: any[] = [];
  paginatedItems: any[] = [];
  pageSize: number = 8;
  pageIndex: number = 0;
  totalItems: number = 0;
  cartDataObj: any[] = [];
  searchQuery: string = '';
  wishlistCount: any[] = [];
  singleProductObj: any[] = [];
  sortKey: string = '';
  sortOrder: string = 'asc';
  searchTerm: string = '';

  constructor(private Services: ShopService) {}

  ngOnInit(): void {
    this.Services.getData().subscribe((res: any) => {
      this.ShopObj = res.ShopObj;
      this.totalItems = this.ShopObj.length;
      this.updatePaginatedItems();
    });
  }

  addToCart(item: any) {
    const existingCart = localStorage.getItem('cart');
    this.cartDataObj = existingCart ? JSON.parse(existingCart) : [];
    this.cartDataObj.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cartDataObj));
  }

  goToView(item: any) {
    this.singleProductObj = [];

    this.singleProductObj.push(item);

    localStorage.setItem(
      'singleProduct',
      JSON.stringify(this.singleProductObj)
    );
  }

  updatePaginatedItems() {
    const startIndex = this.pageIndex * this.pageSize;

    let filteredItems = this.ShopObj.filter((item) =>
      item.Head.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    let sortedItems = this.sortItems(filteredItems);

    this.paginatedItems = sortedItems.slice(
      startIndex,
      startIndex + this.pageSize
    );

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

    this.sortOrder =
      value.includes('Z - A') ||
      value.includes('High') ||
      value.includes('Lowest')
        ? 'desc'
        : 'asc';
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

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value.toLowerCase();
    this.filterItems();
  }

  filterItems() {
    this.paginatedItems = this.ShopObj.filter(
      (item) =>
        item.Head.toLowerCase().includes(this.searchQuery) ||
        item.Name.toLowerCase().includes(this.searchQuery)
    );
    // You might also want to reset the pagination here if needed
  }

  addToWishlist(item: any) {
    const existingWishlist = localStorage.getItem('wishlistProducts');
    this.cartDataObj = existingWishlist ? JSON.parse(existingWishlist) : [];
    this.cartDataObj.push(item);
    localStorage.setItem('wishlistProducts', JSON.stringify(this.cartDataObj));
  }
}
