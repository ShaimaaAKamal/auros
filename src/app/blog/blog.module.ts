import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogComponent } from './blog.component';
import { SingeBlogComponent } from './singe-blog/singe-blog.component';
import { BlogRoutingModule } from './blog-routing-module';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment/comment.component';
import { LeaveCommentComponent } from './leave-comment/leave-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { DisplayCommentsComponent } from './display-comments/display-comments.component';
import { SafePipe } from '../safe.pipe';
@NgModule({
  declarations: [
    SingeBlogComponent,
    BlogComponent,
    BlogCardComponent,
    CommentComponent,
    LeaveCommentComponent,
    DisplayCommentsComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RecaptchaModule
  ]
})
export class BlogModule { }
