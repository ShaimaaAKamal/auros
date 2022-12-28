import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { SingeBlogComponent } from './singe-blog/singe-blog.component';


const routes: Routes = [
  {path:'',component:BlogComponent,title:'All Blog'},
  {path:'author/:authorId',component:BlogComponent,title:'Author Blogs'},
  {path:'category/:categoryName',component:BlogComponent,title:'Category Blogs'},
  {path:':id',component:SingeBlogComponent,title:'Single Blog'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
