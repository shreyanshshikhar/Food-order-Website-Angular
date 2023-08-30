import { CartItem } from "./cartitem";
export interface cart{
   
}
export class Cart{
   items:CartItem[]=[];
   
   get totalPrice():number{
    let totalPrice=0;
    this.items.forEach(item => {totalPrice+=item.price;
        
    });
    return totalPrice;
   }
}