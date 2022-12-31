import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from 'src/app/Services/CommentServices/comment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leave-comment',
  templateUrl: './leave-comment.component.html',
  styleUrls: ['./leave-comment.component.scss']
})
export class LeaveCommentComponent {
  @Input() blogId:number;
  captcha:string;
  captchaError:boolean=false;
  serverError:boolean=false;
  formError:boolean=false;
  addedComment:boolean=false;
  displayError:boolean=false;
 commentForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    comment: new FormControl('',[Validators.required]),
  });
  constructor(private __CommentService:CommentService,private __Router:Router){this.captcha='';
}
  resolved(captchaResponse: string) {
    this.captcha=captchaResponse;
  }

  addComment(){
    this.serverError=false;
    this.addedComment=false;
    if(this.commentForm.invalid && this.captcha) {this.displayError=true; this.captchaError=false; this.formError=false;}
    else if(!this.commentForm.invalid && !this.captcha) {this.displayError=false; this.captchaError=true;this.formError=false;}
    else if(this.commentForm.invalid && !this.captcha) {this.displayError=false; this.captchaError=false;this.formError=true;}
    else{
      this.displayError=false;
      this.captchaError=false; this.formError=false;
      const newComment={
                      blogId:this.blogId,
                      author:this.commentForm.value.name,
                      message:this.commentForm.value.comment,
                      email:this.commentForm.value.email
                     }
     if(this.__CommentService.addNewComment(newComment)){
      this.addedComment=true;
       grecaptcha.reset();
       this.commentForm.reset();
     }
     else{
         this.serverError=true;
     }
    }

  }
  removeMessages(){
      this.displayError=false;
       this.captchaError=false;
        this.formError=false;
              this.addedComment=false;
        this.serverError=false;


    }
}
