import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:'' , component:HomeComponent,title:'Home'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'blog',component:BlogComponent,title:'Blog'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
