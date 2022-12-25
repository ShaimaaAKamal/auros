import { SubCategory } from "./sub-category";
export interface Category {
    name:string,
    id:number,
    noOfProducts?:number,
    subCategories?:SubCategory[],
    mainCateogryId:number,
}
