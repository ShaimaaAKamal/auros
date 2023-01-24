import { Wishlist } from "./wishlist"
export interface User {
    id:number,
    fname:string,
    lname:string,
    type:number,
    noOfReviews?:number,
    noOfOrders?:number,
    email:string,
    password:string,
    birthdate:string,
    gender:string,
    phone?:string,
    wishlist:Wishlist[]
    recevieOffers?:boolean|null,
    newLetters?:boolean|null,
    policyAgree?:boolean|null
}
