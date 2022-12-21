import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageHeaderComponent,NavbarComponent,FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,FormsModule
  ],
  exports:[PageHeaderComponent,FooterComponent,NavbarComponent]
})
export class SharedModule { }
