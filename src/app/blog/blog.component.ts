import { Component } from '@angular/core';
import { Path } from '../Interfaces/path';
import { BlogService } from 'src/app/Services/BlogService/blog.service';
import { Blog } from 'src/app/Interfaces/blog';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  paths:Path[]=[{title:'Home',url:''},{title:'blog'}];
  Blogs:Blog[]=this.__BlogService.getAllBlogs();
  pages:number[]=[];
  noOfPages:number=1;
  displayedBlogs:Blog[]=this.Blogs.length < 6 ? [...this.Blogs]:[...this.Blogs.slice(0,6)];
  displayedBlogStart:number=1;
  currentActiveElement:number=0;
  displayedBlogEnd:number=this.Blogs.length < 6 ? this.Blogs.length :6;
    constructor(private __BlogService: BlogService){
    }
  ngOnInit(): void {
    this.noOfPages=Math.ceil(this.Blogs.length/6);
    for(let i = 1 ; i <= this.noOfPages ; i++ ) this.pages.push(i);

  }

  getPage(event:any){
    const index=parseInt(event.target.innerHTML);
      this.getDisplayed(index);
      this.setActivePage(index);
   
     
   
  }
  getPreviousPage(){
    const index=this.currentActiveElement+1;
     if(index-1 >= 1)
      { this.setActivePage(index-1);
        this.getDisplayed(index-1);
      }
  }
  getNextPage(){
    const index=this.currentActiveElement+1;
     if(index+1 <= this.noOfPages)
      { this.setActivePage(index+1);
        this.getDisplayed(index+1);
      }
  }
  setActivePage(index:number){
      const pages=document.querySelectorAll('.page');
     Array.from(pages)[this.currentActiveElement].classList.remove('active');
     Array.from(pages)[index-1].classList.add('active');
     this.currentActiveElement=index-1;
  }
  getDisplayed(index:number){
    console.log(index);
      if(index < this.noOfPages){
          this.displayedBlogStart=index !== 1 ? ((index-1)*6)+1 : 1;
          this.displayedBlogEnd=this.displayedBlogStart+5;
        }
        else if (index == this.noOfPages){
          this.displayedBlogStart=index !== 1 ? ((index-1)*6)+1 : 1;
          this.displayedBlogEnd=this.Blogs.length;
        }
        this.displayedBlogs=[...this.Blogs.slice(this.displayedBlogStart-1,this.displayedBlogEnd)];
      }


}
