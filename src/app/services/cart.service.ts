import { Injectable } from '@angular/core';
import { Foods } from '../shared/model/food';
import { CartItem } from '../shared/model/cartitem';
import { Cart } from '../shared/model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find((item: CartItem) => item.food.id == food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item: CartItem) => item.food.id != foodId);
  }

  changeQuantity(quantity: number, foodId: number): void {
    let cartItem = this.cart.items.find((item: CartItem) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
