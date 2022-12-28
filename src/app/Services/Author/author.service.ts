import { Injectable } from '@angular/core';
import { Author } from 'src/app/Interfaces/author';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
   Authors:Author[]=[
    {id:1,name:'Shaimaa Kamal'},
    {id:2,name:'Hossam Soliman'},
    {id:3,name:'Taha Saad'},
    {id:4,name:'Asmaa Hassan'},
    {id:5,name:'Ahmed Fares'},
    {id:6,name:'Ahmed Atta'},
    {id:7,name:'Waleed Gamal'},
   ]
  constructor() { }
  getAllAuthors(){
    return this.Authors;
  }

  getAuthorId(name:string){
       const author= this.Authors.find(author => author.name === name);
       if(author) return author.id;
       else return 0;
  }
}
