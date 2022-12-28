import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogComponent } from './blog.component';
import { SingeBlogComponent } from './singe-blog/singe-blog.component';
import { BlogRoutingModule } from './blog-routing-module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    SingeBlogComponent,
    BlogComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
