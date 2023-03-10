import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'' , component:HomeComponent,title:'Home'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'blog',loadChildren:()=>import('./blog/blog.module').then((ms)=>ms.BlogModule)},
  {path:'FAQS',component:FaqComponent,title:'FAQS'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then((ms)=>ms.AuthModule)},
  {path:'shop',loadChildren:()=>import('./shop/shop.module').then((ms=>ms.ShopModule))},
  {path:'**' ,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
