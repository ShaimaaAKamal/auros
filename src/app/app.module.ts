import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { FormsModule } from '@angular/forms';
import { HomeHeadingComponent } from './home/home-heading/home-heading.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { TrendingComponent } from './home/trending/trending.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDesignComponent } from './home/new-design/new-design.component';
import { CategoryItemsCardComponent } from './home/category-items-card/category-items-card.component';
import { SidenavItemsComponent } from './home/new-design/home-side-nav/sidenav-items/sidenav-items.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HomeSideNavComponent } from './home/new-Design/home-side-nav/home-side-nav.component';
import { DiscoverSectionComponent } from './home/discover-section/discover-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    NotfoundComponent,
    AboutComponent,
    FaqComponent,
    HomeHeadingComponent,
    CategoriesComponent,
    TrendingComponent,
    NewDesignComponent,
    CategoryItemsCardComponent,
    HomeSideNavComponent,
    SidenavItemsComponent,
    ProductCardComponent,
    DiscoverSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
