import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BlogLayoutComponent } from './blogs/blog-layout/blog-layout.component';
import { SinglePageLayoutComponent } from './singlePage/single-page-layout/single-page-layout.component';

export const routes: Routes = [

  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'blog',
        component:BlogLayoutComponent
      },
      {
        path:'singlePage',
        component:SinglePageLayoutComponent
      }
    ]
  }

];
