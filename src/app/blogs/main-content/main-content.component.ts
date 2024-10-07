import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {

  mainDataObj: any[] = [];
  paginatedItems: any[] = [];
  pageSize: number = 6; // Items per page
  pageIndex: number = 0; // Current page index
  totalItems: number = 0; // Total number of items
  sortKey: string = ''; // Sorting key (like bookTitle, Model)
  sortOrder: string = 'asc'; // Sorting order (asc or desc)

  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      this.mainDataObj = res.mainData;
      this.totalItems = this.mainDataObj.length;
      this.updatePaginatedItems();
    });
  }

  // Method to update paginated items after sorting or page change
  updatePaginatedItems() {
    const startIndex = this.pageIndex * this.pageSize;
    let sortedItems = this.sortItems(this.mainDataObj);
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

    // Determine sorting criteria based on dropdown selection
    if (value.includes('bookTitle')) {
      this.sortKey = 'bookTitle';
    } else if (value.includes('Price')) {
      this.sortKey = 'Price';
    } else if (value.includes('Model')) {
      this.sortKey = 'Model';
    } else {
      this.sortKey = ''; // Default: No sorting
    }

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
