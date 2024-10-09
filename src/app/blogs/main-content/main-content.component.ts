import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent implements OnInit {
  mainDataObj: any[] = [];
  paginatedItems: any[] = [];
  pageSize: number = 6;
  pageIndex: number = 0;
  totalItems: number = 0;
  sortKey: string = '';
  sortOrder: string = 'asc';
  searchQuery: string = '';

  singlePostObj: any[] = [];

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      this.mainDataObj = res.mainData;
      this.totalItems = this.mainDataObj.length;
      this.updatePaginatedItems();
    });
  }

  updatePaginatedItems() {
    const startIndex = this.pageIndex * this.pageSize;
    let sortedItems = this.sortItems(this.mainDataObj);
    this.paginatedItems = sortedItems.slice(
      startIndex,
      startIndex + this.pageSize
    );
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

    if (value.includes('bookTitle')) {
      this.sortKey = 'bookTitle';
    } else if (value.includes('Price')) {
      this.sortKey = 'Price';
    } else if (value.includes('Model')) {
      this.sortKey = 'Model';
    } else {
      this.sortKey = '';
    }

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

  goToView(item: any) {
    this.singlePostObj = [];

    this.singlePostObj.push(item);

    localStorage.setItem('singlePostData', JSON.stringify(this.singlePostObj));
  }

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value.toLowerCase();
    this.filterItems();
  }

  filterItems() {
    this.paginatedItems = this.mainDataObj.filter(
      (item) =>
        item.bookTitle.toLowerCase().includes(this.searchQuery) ||
        item.bookDescription.toLowerCase().includes(this.searchQuery)
    );
    // You might also want to reset the pagination here if needed
  }
}
