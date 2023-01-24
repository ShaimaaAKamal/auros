import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
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
import { GoogleLoginProvider, SocialLoginModule , SocialAuthServiceConfig} from '@abacritt/angularx-social-login';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    SharedModule,ReactiveFormsModule,HttpClientModule,
    SocialLoginModule
  ],
    providers: [MailService,
      
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '833486081205-skkvhahhdmmrhc2mm9h809sd10eul7hn.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('2882402905230036')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  // providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
