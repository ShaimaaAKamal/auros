import { Component, Input } from '@angular/core';
import { Blog } from '../../Interfaces/blog';
import { Comment } from '../../Interfaces/comment';
import { PagnationService } from 'src/app/Services/PagnationService/pagnation.service';
import { CommentService } from '../../Services/CommentServices/comment.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-display-comments',
  templateUrl: './display-comments.component.html',
  styleUrls: ['./display-comments.component.scss']
})
export class DisplayCommentsComponent {
  @Input() blog:any;
  pages:number[]=[];
  noOfPages:number=1;
  displayedComments:Comment[]=[]
  displayedBlogStart:number=1;
  currentActiveElement:number=0;
  displayedBlogEnd:number=0;
  index:number=0;
  callsetInit=1;
  htmlPages:any=new BehaviorSubject(null)
  newPage:boolean=false;
  noOfOldPages=1;

  constructor(private __PagnationService:PagnationService,private __CommentService:CommentService){}

  ngOnInit(): void {
    this.__CommentService.displayed.subscribe({
      next:()=>{
              console.log(this.callsetInit,'display');
      this.noOfPages=Math.ceil(this.blog.comments.length/6);
      this.setPageOnAdding();
      this.noOfOldPages=this.noOfPages;
      this.pages=[];
      for(let i = 1 ; i <= this.noOfPages ; i++ ) this.pages.push(i);
       this.__PagnationService.setInital(this.blog.comments,this.pages,this.noOfPages,this.callsetInit);
       this.__PagnationService.displayedArray.subscribe({next:()=>{this.displayedComments=this.__PagnationService.displayedArray.getValue();} });
       this.__PagnationService.currentActiveElement.subscribe({next:()=>{this.currentActiveElement=this.__PagnationService.currentActiveElement.getValue();} });
       this.__PagnationService.displayedBlogEnd.subscribe({next:()=>{this.displayedBlogEnd=this.__PagnationService.displayedBlogEnd.getValue();} });
       this.__PagnationService.displayedBlogStart.subscribe({next:()=>{this.displayedBlogStart=this.__PagnationService.displayedBlogStart.getValue();} });
         this.callsetInit+=1;
                        } 
          });
  
   }
    setPageOnAdding(){
       if(this.callsetInit ===1 )  {this.newPage=false}
      else{
        if(this.noOfOldPages+1 === this.noOfPages){this.newPage=true; }
        else if(this.noOfOldPages === this.noOfPages && this.__PagnationService.displayedBlogEnd.getValue() < (this.__PagnationService.currentActiveElement.getValue()+1)*6){
          this.newPage=true;            
          }
        else { this.newPage=false ;}
      }
    }
    getPage(event:any){
      this.__PagnationService.getPage(event);
  }
  getPreviousPage(){
    this.__PagnationService.getPreviousPage();
  }
  getNextPage(){
      this.__PagnationService.getNextPage();
  }
  setActivePage(index:number){
    this.__PagnationService.setActivePage(index);
  }
  getDisplayed(index:number){
      this.__PagnationService.getDisplayed(index);
      }
}
