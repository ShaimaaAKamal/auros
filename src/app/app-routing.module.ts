import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'' , component:HomeComponent,title:'Home'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'blog',component:BlogComponent,title:'Blog'},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then((ms)=>ms.AuthModule)},
  {path:'**' ,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
