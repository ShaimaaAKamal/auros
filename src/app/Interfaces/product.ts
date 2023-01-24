import { Manufacturers } from './manufacturers';
import { Wishlist } from './wishlist';
export interface Product {
  id:number,
  title:string,
  reference?:string,
  isNew?:boolean,
  isTrend?:boolean,
  colors?:string[],
  sizes?:string[],
  discount?:number,
  stock:number,
  PAPERTYPE?:string[],
  minDesc?:string,
  packContains?:any,
  DIMENSION?:string[],
  DataSheet?:boolean,
  imagePath:string,
  images?:string[],
  desc?:string,
  subCategoryId?:number,
  categoryId:number,
  category?:string,
  mainCategoryId?:number,
  src?:string,
  ManufacturerId?:number,
  noOfReviews:number,
  rate:number,
  isPopular?:Boolean,
  old:string,
  descList?:string[];
  additionalDesc?:string,
  addedToWishList:boolean;
  WishlistId?:number
}
