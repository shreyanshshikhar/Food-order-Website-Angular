import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/model/cart';
import { CartItem } from '../shared/model/cartitem';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements  OnInit {
  cart!:Cart;
constructor(private cartService:CartService){
this.setCart()
}
  ngOnInit(): void {
  }

  
  


 setCart(){
    this.cart=this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
this.cartService.removeFromCart(cartItem.food.id);
this.setCart();
  }
  changeQuantity(cartItem: CartItem, newQuantity: string) {
    const parsedQuantity = parseInt(newQuantity, 10); // Convert the value to a number
    if (!isNaN(parsedQuantity)) {
        cartItem.quantity = parsedQuantity;
    }

}
}
