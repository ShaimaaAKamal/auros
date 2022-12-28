import { Component } from '@angular/core';
import { Path } from '../Interfaces/path';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MailService } from '../Services/Email/mail.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  paths:Path[]=[{title:'Home',url:''},{title:'Contact us'}];
   states = [
    {name: 'Customer Service'},
    {name: 'WebMaster'},
  ];
   user=localStorage.getItem('user');
   userEmail=this.user?JSON.parse(this.user).email:'your@example.com';
   displayError:boolean=false;
   notSent:boolean=false;
   sent:boolean=false;
  contactForm:FormGroup=new FormGroup({
    subject: new FormControl(this.states[0]),
    email: new FormControl('',[Validators.required,Validators.email]),
    attachment: new FormControl(''),
    message: new FormControl('',[Validators.required]),
    check: new FormControl(''),

  });
  constructor(private __MailService:MailService){}
  submitContactForm(){
    if(this.contactForm.invalid) this.displayError=true;
    else{
      const formData:any={}
      formData['email']=this.contactForm.value.email;
      formData['message']=this.contactForm.value.message;
      formData['_subject']=this.contactForm.value.subject.name;
      this.__MailService.SendEmail(formData).subscribe({
          next:(response:any) => {
            this.notSent=false;
            this.sent=true;
            this.contactForm.reset();
          },
          error: error => {
            console.log({ error });
            this.notSent=true;
            this.sent=false;
    }     
        })
    }
  }
}
