export interface Blog {
    id:number,
    title:string,
    image:string,
    description:string,
    category:string,
    date:string,
    noOfLikes:number,
    author:string,
    noOfComments:number,
    authorId?:number,
}
