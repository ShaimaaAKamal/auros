import { Injectable } from '@angular/core';
import { Comment } from 'src/app/Interfaces/comment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments:Comment[];
  displayed:any;
  options:any= { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  localStorageComments=localStorage.getItem('comments');
  staticComments:Comment[]=[
    {id:1,date:new Date().toLocaleDateString("en-US",this.options),author:'Tim Leo',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:1},
    {id:2,date:new Date().toLocaleDateString("en-US",this.options),author:'Eman Ahmed',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:4},
    {id:3,date:new Date().toLocaleDateString("en-US",this.options),author:'Mai Omar',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:2},
    {id:4,date:new Date().toLocaleDateString("en-US",this.options),author:'Omar Ahmed',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:5},
    {id:5,date:new Date().toLocaleDateString("en-US",this.options),author:'Ahmed Osama',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:3},
    {id:6,date:new Date().toLocaleDateString("en-US",this.options),author:'Marwa magdy',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:1},
    {id:7,date:new Date().toLocaleDateString("en-US",this.options),author:'Ahmed Tamer',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:3},
    {id:8,date:new Date().toLocaleDateString("en-US",this.options),author:'Harvey Spectar',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:2},
    {id:9,date:new Date().toLocaleDateString("en-US",this.options),author:'Soly Soly',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:4},
    {id:10,date:new Date().toLocaleDateString("en-US",this.options),author:'Magdy Sadat',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:6},
    {id:11,date:new Date().toLocaleDateString("en-US",this.options),author:'Shaimaa Mohamed',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:8},
    {id:12,date:new Date().toLocaleDateString("en-US",this.options),author:'Mona Ahmed',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:10},
    {id:13,date:new Date().toLocaleDateString("en-US",this.options),author:'Aml Osama',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:11},
    {id:14,date:new Date().toLocaleDateString("en-US",this.options),author:'Aliaa Kamal',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:7},
    {id:15,date:new Date().toLocaleDateString("en-US",this.options),author:'Farida Omar',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:6},
    {id:16,date:new Date().toLocaleDateString("en-US",this.options),author:'Rania Ahmed',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:6},
    {id:17,date:new Date().toLocaleDateString("en-US",this.options),author:'Lamia Kamal',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:5},
    {id:18,date:new Date().toLocaleDateString("en-US",this.options),author:'Ali Mohmaed',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:3},
    {id:19,date:new Date().toLocaleDateString("en-US",this.options),author:'Eslam Ali',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:2},
    {id:20,date:new Date().toLocaleDateString("en-US",this.options),author:'Marwan Mahmouf',message:'At Nulla id tincidunt ut sed semper vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo habitasse velit Vestibulum tincidunt In',blogId:4},
  ];
  constructor() {  
                    this.displayed=(new BehaviorSubject((this.localStorageComments) ? JSON.parse(this.localStorageComments):this.staticComments))
                    this.displayed.subscribe({
                        next:()=>{
                             this.comments  =this.displayed.getValue();
                            localStorage.setItem('comments',JSON.stringify(this.displayed.getValue()));

                        } 
                      });

                }

  getAllComments(){
    return this.comments;
  }

getCommentsByBlogId(blogId:number){
  const comments=this.comments.filter(comment => comment.blogId === blogId);
  const returnedComments=comments.length >0 ? comments :  [];
  return returnedComments;
}
addNewComment(newComment:any){
   try{
        const comment={...newComment,id:Date.now(),date:new Date().toLocaleDateString("en-US",this.options)}
        this.comments.push(comment);
        this.displayed.next(this.comments);
        return true;
  }catch(e){
       return false;
  }
}
}
