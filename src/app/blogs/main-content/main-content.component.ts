import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit{


  constructor (private service : BlogService) {}

  mainDataObj : any

  ngOnInit(): void {

    this.service.getData().subscribe((res:any)=>{

      this.mainDataObj = res.mainData;

    })

  }


}
