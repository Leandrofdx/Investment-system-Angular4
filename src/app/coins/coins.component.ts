import { Component, OnInit } from '@angular/core';
import { Coin } from './coin/coin.model'
import { CoinsService } from './coins.service'
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
  animations: [
    trigger('triggerCoin', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})

export class CoinsComponent implements OnInit {
 coinsState = 'ready'
  coins: Coin[] = [
    {
      "id": 1,
      "name": "USD Dólar",
      "buy": 3.225,
      "variation": -1.2
    },
    {
      "id": 2,
      "name": "EUR Euro",
      "buy": 3.867,
      "variation": 0.1
    },
    {
      "id": 3,
      "name": "GBP Libra",
      "buy": 3.402,
      "variation": -1.5
    },
    {
      "id": 4,
      "name": "RUB EUR ₽",
      "buy": 3.125,
      "variation": 0.2
    }
  ]

  constructor(private coinsService: CoinsService) { }

  ngOnInit() {
    // this.coinsService.coins()
    // .subscribe(coins => this.coins = coins)
  }

}
