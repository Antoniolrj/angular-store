import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  private myShoppingCart: Product[] = []
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  totalPrice = 0

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }

  getShoppingCart(){
    return this.myShoppingCart
  }

  getTotal(){
    return this.totalPrice = this.myShoppingCart.reduce((acc, current) => {
      return acc + current.price
    }, 0)
  }
}
