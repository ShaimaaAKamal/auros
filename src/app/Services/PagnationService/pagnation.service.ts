import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagnationService {
  // pages:number[]=[];
  // noOfPages:number=1;
   pages:any=new BehaviorSubject([]);
  noOfPages:any=new BehaviorSubject(1);
  array:any[];
  displayedArray:any=new BehaviorSubject([]);
  displayedBlogStart=new BehaviorSubject(1);

  currentActiveElement=new BehaviorSubject(0);
  displayedBlogEnd=new BehaviorSubject(1);
  // callsetInit=new BehaviorSubject(0);
  constructor() { }
   
  setInital(array:any[],pages:number[],noOfPages:number,callsetInit:number=1){  
      this.array=array;
      this.noOfPages.next(noOfPages);
      this.pages.next(pages);
      console.log(this.currentActiveElement.getValue(),'current');
      console.log(callsetInit,'call');
      if(callsetInit === 1)
      {
        this.displayedBlogEnd.next(array.length < 6 ? array.length :6);
       this.displayedBlogStart.next(1);
      }
      else { if(this.displayedBlogEnd.getValue() < (this.currentActiveElement.getValue()+1)*6){
                console.log(array.length,'arr');
                console.log(this.displayedBlogEnd.getValue(),'end');
              //  this.displayedBlogEnd.next(this.displayedBlogEnd.getValue()+1);
                             this.displayedBlogEnd.next(array.length);


            } 
            else if(this.displayedBlogEnd.getValue() === (this.currentActiveElement.getValue()+1)*6 && this.displayedBlogEnd.getValue()+1 === array.length)
            {
              
                this.getDisplayed(noOfPages);
                this.currentActiveElement.next(noOfPages-1);              
            }
      

      }
     
      this.displayedArray.next(array.length < 6 ? [...array]:[...array.slice(this.displayedBlogStart.getValue()-1,this.displayedBlogEnd.getValue())]); 
  }
    getPage(event:any){
    const index=parseInt(event.target.innerHTML);
      this.getDisplayed(index);
      this.setActivePage(index);
  }
  getPreviousPage(){
     const index=this.currentActiveElement.getValue()+1;
     if(index-1 >= 1)
      { this.setActivePage(index-1);
        this.getDisplayed(index-1);
      }
  }
  getNextPage(){
    const index=this.currentActiveElement.getValue()+1;
         if(index+1 <= this.noOfPages.getValue())
      { this.setActivePage(index+1);
        this.getDisplayed(index+1);
      }
  }
  setActivePage(index:number){
         const pages=document.querySelectorAll('.page');
         Array.from(pages)[this.currentActiveElement.getValue()].classList.remove('active');
         Array.from(pages)[index-1].classList.add('active');
         this.currentActiveElement.next(index-1);

  }
  getDisplayed(index:number){
    let pages:any;
           this.noOfPages.subscribe({next:()=>{pages=this.noOfPages.getValue();} });
          if(index < pages){
          this.displayedBlogStart.next(index !== 1 ? ((index-1)*6)+1 : 1)
          this.displayedBlogEnd.next(this.displayedBlogStart.getValue()+5);
        }
          else if (index == pages){
          // console.log('equal')
          this.displayedBlogStart.next(index !== 1 ? ((index-1)*6)+1 : 1);
          this.displayedBlogEnd.next(this.array.length);
          // console.log('END',this.displayedBlogEnd.getValue());
          //           console.log('sTART',this.displayedBlogStart.getValue());


        }
          this.displayedArray.next([...this.array.slice(this.displayedBlogStart.getValue()-1,this.displayedBlogEnd.getValue())]);
          // console.log(this.displayedArray.getValue());
      }

}
