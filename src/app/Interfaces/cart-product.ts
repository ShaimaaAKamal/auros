import { Product } from './product';
export interface CartProduct {
    product:Product,
    quantity:number,
    size?:string,
    color?:string,
}
