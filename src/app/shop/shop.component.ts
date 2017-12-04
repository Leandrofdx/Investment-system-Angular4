import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop-service'
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
 animations: [
    trigger('trigger', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})

export class ShopComponent implements OnInit {
  
  coinState = 'ready'

  constructor(private shopService: ShopService) { }

  ngOnInit() {
  }

  coins(): any[] {
  	return this.shopService.coins;
  }

   total(): number {
    return this.shopService.total()
  }

  clear() {
    this.shopService.clear();
  }
  removeCoin(item:any) {
    this.shopService.removeCoin(item)
  }

  addCoin(item: any) {
    this.shopService.addCoin(item)

  }
  
}