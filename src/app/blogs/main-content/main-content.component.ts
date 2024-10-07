import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {


  constructor(private service: BlogService) { }

  mainDataObj: any

  paginatedItems: any[] = [];
  pageSize: number = 9; // Number of items per page
  pageIndex: number = 0; // Current page index
  totalItems: number = 0; // Total number of items



  ngOnInit(): void {

    this.service.getData().subscribe((res: any) => {

      this.mainDataObj = res.mainData;
      this.totalItems = this.mainDataObj.length;
      this.updatePaginatedItems();
    })

  }


  updatePaginatedItems() {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedItems = this.mainDataObj.slice(startIndex, startIndex + this.pageSize);
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