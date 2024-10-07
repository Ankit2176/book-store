import { Component, OnInit } from '@angular/core';
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
  ShopObj: any[] = [];
  paginatedItems: any[] = [];
  pageSize: number = 8; // Number of items per page
  pageIndex: number = 0; // Current page index
  totalItems: number = 0; // Total number of items
  sortKey: string = ''; // Sorting key
  sortOrder: string = 'asc'; // Sorting order

  constructor(private Services: ShopService) { }

  ngOnInit(): void {
    debugger; 
    this.Services.getData().subscribe((res: any) => {
      this.ShopObj = res.ShopObj;
      this.totalItems = this.ShopObj.length;
      this.updatePaginatedItems();
    });
  }

  // Method to update paginated items after sorting or page change
  updatePaginatedItems() {
    const startIndex = this.pageIndex * this.pageSize;
    let sortedItems = this.sortItems(this.ShopObj);
    this.paginatedItems = sortedItems.slice(startIndex, startIndex + this.pageSize);
  }

  // Sorting method
  sortItems(items: any[]): any[] {
    if (this.sortKey === '') {
      return items; // No sorting if sortKey is empty
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

  // Called when sorting option changes
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
