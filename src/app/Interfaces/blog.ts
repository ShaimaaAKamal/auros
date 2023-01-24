import { Comment } from "./comment";
export interface Blog {
    id:number,
    title:string,
    image:string,
    description:string,
    secondDesc?:string,
    thirdDesc?:string,
    category:string,
    date:string,
    noOfLikes:number,
    author:string,
    noOfComments:number,
    authorId?:number,
    tag?:string,
    comments?:Comment[];
    src?:string,
}
