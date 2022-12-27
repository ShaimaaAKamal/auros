import { Injectable } from '@angular/core';
import { CategoriesService } from '../CategoriesService/categories.service';
import { Product } from 'src/app/Interfaces/product';
import { ReviewService } from '../ReviewService/review.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
       products:Product[]=[];
       staticProducts:Product[]=[
     {
       id: 1,
       imagePath:"/assets/images/teapot/",
       title:'Teapot',
       isTrend:true,
       stock:5,
       sizes:['S','M','L' ,'XL'],
       colors:['#fff','#000','#f00','#ae4','#f84'],
       old:"$43.90",
       reference:'demo_1',
       categoryId:1,      
       rate:0,
       noOfReviews:0,
       discount:10,        
       desc:'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut. Cras at porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero tincidunt sit amet. Morbi sodales fermentum nibh nec facilisis. Morbi pharetra varius velit, eget varius libero finibus quis. Quisque auctor varius lectus, lacinia rhoncus velit posuere vel. Cras condimentum tincidunt urna, sed vehicula ipsum dapibus et. Pellentesque pharetra ultrices varius. Sed viverra nec purus ut ornare.',
       descList:['Aenean auctor sem ac ex efficitur','Non mattis odio bibendum','Sed vitae enim at tortor finibus','Integer facilisis eleifend vehicula'
                 ,'In hac habitasse platea dictumst'],
      additionalDesc:'Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh non eros lobortis tempus. Maecenas dignissim elementum massa, vel accumsan urna elementum in. Suspendisse at dui euismod, rhoncus eros non, imperdiet ipsum. Vestibulum vehicula vel turpis et vestibulum. Ut porta et ex maximus malesuada.'
     },
     { rate:0,
       noOfReviews:0,
       id: 2,
       reference:'demo_3',
       minDesc:'Regular fit, round neckline, long sleeves. 100% cotton, brushed inner side for extra comfort.',
       imagePath:"/assets/images/miroDinningTable/",
       isTrend:true,
       title:'Miro Dinning Table',
       old:"$35.90",
       packContains:[
        {name:'Mega Table  Lamp',price:'$9,00',image:"/assets/images/megaTableLamp",quantity:1},
        {name:'Soundless Speaker',price:'$0,00',image:"/assets/images/soundlessSpeaker",quantity:1}
       ],
       categoryId:2,
       stock:2072, 
       discount:20,
       desc:"PolyFaune collection features classic products with colorful patterns, inspired by the traditional japanese origamis. To wear with a chino or jeans. The sublimation textile printing process provides an exceptional color rendering and a color, guaranteed overtime."
     },
     { rate:5,
       id: 3,
       isNew:true,
       noOfReviews:1,
       reference:'demo_5',
       isTrend:true,
       DIMENSION:['40x60 cm','60x90cm','80x120cm'],
       minDesc:'Printed on rigid matt finish and smooth surface.',
       imagePath:"/assets/images/DiscusFloorAndTable/",
       title:'Janus Table Lamp',
       old:"$29.00",
       categoryId:3,
       discount:0,
       stock:895, 
      desc:'The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.'
     },
     {rate:0,
       noOfReviews:0,
       id: 4,
       reference:'demo_6',
       minDesc:'Printed on rigid matt paper and smooth surface.',
       isTrend:true,
       imagePath:"/assets/images/janusTableLamp/",
       desc:'The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.'
       ,
       title:'discus Floor and Table',
       DIMENSION:['40x60 cm','60x90cm','80x120cm'],
       old:"$29.00",
       stock:894,
       discount:0,
       categoryId:4,
     },
     {
        imagePath:"/assets/images/unaChair/",
        noOfReviews:0,
      DIMENSION:['40x60 cm','60x90cm','80x120cm'],
       rate:0,
       id: 5,
       reference:'demo_7',
       minDesc:'Printed on rigid paper with matt finish and smooth surface.',
       desc:'The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.',
       isTrend:true,
       title:'Una Chair',
       isNew:true,
       old:"$29.90",
       discount:0,
       stock:297,
       categoryId:1,

     },
     {
      imagePath:"/assets/images/studioChair/",
      noOfReviews:0,
       rate:0,
       id: 6,
       reference:'demo_11',
       minDesc:'White Ceramic Mug, 325ml.',
       desc:'The best is yet to come! Start the day off right with a positive thought. 8,2cm diameter / 9,5cm height / 0.43kg. Dishwasher-proof.',
       title:'Studio Chair',
       isNew:true,
       DataSheet:true,
       old:"$11.90",
       discount:0,
       stock:300,
       categoryId:1,

     },
     {
      imagePath:"/assets/images/Nude/",
      noOfReviews:0,
       rate:0,
       id: 7,
       reference:'demo_12',
       minDesc:'White Ceramic Mug, 325ml.',
       desc:'The best is yet to come! Start the day off right with a positive thought. 8,2cm diameter / 9,5cm height / 0.43kg. Dishwasher-proof.',
       title:'Nude',
       isNew:true,
       DataSheet:true,
       old:"$11.90",
       discount:0,
       stock:297,
       categoryId:1,

     },
     {
      imagePath:"/assets/images/Black/",
      noOfReviews:0,
       rate:0,
       id: 8,
       reference:'demo_16',
       minDesc:'Cushion with removable cover and invisible zip on the back. 32x32cm',
       desc:'The brown bear cushion will add a graphic and colorful touch to your sofa, armchair or bed. Create a modern and zen atmosphere that inspires relaxation. Cover 100% cotton, machine washable at 60° / Filling 100% hypoallergenic polyester.',
       title:'Black',
       isNew:true,
       old:"$18.90",
       discount:0,
       stock:300,
       categoryId:1,
        colors:['#fff','#000'],
     },
      { rate:0,
       noOfReviews:0,
       id: 9,
       reference:'demo_13',
       minDesc:'White Ceramic Mug. 325ml',
       imagePath:"/assets/images/MiroBlackDinningTable/",
       isTrend:false,
       title:'Miro Black Dinning Table',
       old:"$35.90",
       DataSheet:true,
       categoryId:2,
       stock:300, 
       discount:20,
       desc:"Add an optimistic touch to your morning coffee and start the day in a good mood! 8,2cm diameter / 9,5cm height / 0.43kg. Dishwasher-proof."
     },
     { rate:0,
       noOfReviews:0,
       id: 10,
       colors:['#fff','#000'],
       reference:'demo_19',
       minDesc:'Cushion with removable cover and invisible zip on the back. 32x32cm',
       imagePath:"/assets/images/birdStool/",
       isTrend:false,
       title:'Bird Stool',
       old:"$18,90",
       DataSheet:true,
       categoryId:2,
       stock:299, 
       discount:0,
       desc:"The hummingbird cushion will add a graphic and colorful touch to your sofa, armchair or bed. Create a modern and zen atmosphere that inspires relaxation. Cover 100% cotton, machine washable at 60° / Filling 100% hypoallergenic polyester."
     },
     { rate:0,
       noOfReviews:0,
       id: 11,
       reference:'demo_18',
       minDesc:'Vector graphic, format: svg. Download for personal, private and non-commercial use.',
       imagePath:"/assets/images/afteroomBarstool/",
       isTrend:false,
       title:'Afteroom Stool',
       old:"$9,90",
       DataSheet:true,
       categoryId:2,
       stock:299, 
       discount:0,
       desc:"You have a custom printing creative project? The vector graphic Mountain fox illustration can be used for printing purpose on any support, without size limitation."
     },
      { rate:0,
       noOfReviews:0,
       id: 12,
       reference:'demo_19',
       minDesc:'Vector graphic, format: svg. Download for personal, private and non-commercial use.',
       imagePath:"/assets/images/orbitTableLampOne/",
       isTrend:false,
       title:'Orbit Table Lamp One',
       old:"$9,90",
       DataSheet:true,
       categoryId:2,
       stock:300, 
       discount:10,
       desc:"You have a custom printing creative project? The vector graphic Mountain fox illustration can be used for printing purpose on any support, without size limitation."
     },
       { rate:0,
       noOfReviews:0,
       id: 13,
       reference:'demo_20',
       minDesc:'Vector graphic, format: svg. Download for personal, private and non-commercial use.',
       imagePath:"/assets/images/megaTableLamp/",
       isTrend:false,
       isNew:true,
       title:'Mega Table Lamp',
       old:"$19,90",
       DataSheet:true,
       categoryId:2,
       stock:300, 
       discount:10,
       desc:"You have a custom printing creative project? The vector graphic Mountain fox illustration can be used for printing purpose on any support, without size limitation."
     },
       { rate:0,
       noOfReviews:0,
       id: 14,
       reference:'demo_8',
       minDesc:'120 sheets notebook with hard cover made of recycled cardboard. 16x22cm',
       imagePath:"/assets/images/mapleLightMarple/",
       PAPERTYPE:['Ruled','Plain','Squareed','Dotted'],
       isTrend:false,
       isNew:true,
       title:'Maple Light Marble',
       old:"$12,90",
       categoryId:2,
       stock:300, 
       discount:0,
       desc:"The Mountain fox notebook is the best option to write down your most ingenious ideas. At work, at home or when traveling, its endearing design and manufacturing quality will make you feel like writing! 90 gsm paper / double spiral binding."
     },
      { rate:0,
       noOfReviews:0,
       id: 15,
       reference:'demo_19',
       minDesc:'Vector graphic, format: svg. Download for personal, private and non-commercial use.',
       imagePath:"/assets/images/forma/",
       isTrend:false,
       title:'Forma',
       old:"$9,90",
       DataSheet:true,
       categoryId:2,
       stock:300, 
       discount:10,
       desc:"You have a custom printing creative project? The vector graphic Mountain fox illustration can be used for printing purpose on any support, without size limitation."
     },
         { rate:0,
       noOfReviews:0,
       id: 15,
       reference:'demo_19',
       minDesc:'White Ceramic Mug. 325ml',
       imagePath:"/assets/images/forma/",
       isTrend:false,
       title:'Soundless Speaker',
       old:"$99,90",
       DataSheet:true,
       categoryId:2,
       stock:300, 
       discount:10,
       desc:"Customize your mug with the text of your choice. A mood, a message, a quote... It's up to you! Maximum number of characters:"
     },
        ];
  constructor(private __CategoriesService:CategoriesService,private __ReviewService:ReviewService) {
       const prod=localStorage.getItem('products');
       this.products=prod ? JSON.parse(prod) : this.staticProducts;
       this.products.forEach((product:Product) => { 
       product['category']=this.__CategoriesService.getCategoryById(product.categoryId)?.name;
       product['noOfReviews']=this.__ReviewService.getReviewByProductID(product.id).length;
       product['rate']=this.__ReviewService.getRateByProduct(product.id);
                     });
       localStorage.setItem('products',JSON.stringify(this.products));
              }
   getNewProducts(){
    return this.products.filter(product => product.isNew)
   }

    getTrendingProducts(){
    return this.products.filter(product => product.isTrend)
   }

   getAllProducts(){
    return this.products;
   }

    getProductById(id:string){
    return this.products.find(product => product.id===parseInt(id));
   }
   getProductsByCategory(Selectedproduct:Product){
        return this.products.filter(product => (product.categoryId === Selectedproduct.categoryId && product.id !== Selectedproduct.id ))
   }
}
