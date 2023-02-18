import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  order!: Order;

  create(order : Order){
    return this.order = order;
  }

  getNewOrder(): Order {
    return this.order;
  }

}
