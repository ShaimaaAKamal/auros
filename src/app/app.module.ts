import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeHeadingComponent } from './home/home-heading/home-heading.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { homeTrendingComponent } from './home/trending/trending.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDesignComponent } from './home/new-design/new-design.component';
import { CategoryItemsCardComponent } from './home/category-items-card/category-items-card.component';
import { SidenavItemsComponent } from './home/new-design/home-side-nav/sidenav-items/sidenav-items.component';
import { HomeSideNavComponent } from './home/new-Design/home-side-nav/home-side-nav.component';
import { DiscoverSectionComponent } from './home/discover-section/discover-section.component';
import { HomeBlogSectionComponent } from './home/home-blog-section/home-blog-section.component';
import { HomeBlogCardComponent } from './home/home-blog-section/home-blog-card/home-blog-card.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MailService } from './Services/Email/mail.service';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    NotfoundComponent,
    AboutComponent,
    FaqComponent,
    HomeHeadingComponent,
    CategoriesComponent,
    homeTrendingComponent,
    NewDesignComponent,
    CategoryItemsCardComponent,
    HomeSideNavComponent,
    SidenavItemsComponent,
    DiscoverSectionComponent,
    HomeBlogSectionComponent,
    HomeBlogCardComponent,
    BlogCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    SharedModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
