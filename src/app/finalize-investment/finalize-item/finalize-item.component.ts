import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coin } from '../../coins/coin/coin.model'


@Component({
  selector: 'app-finalize-item',
  templateUrl: './finalize-item.component.html',
  styleUrls: ['./finalize-item.component.css']
})
export class FinalizeItemComponent implements OnInit {

	@Input() coins: Coin[]
  


  @Output() increaseQty = new EventEmitter<Coin>()
  @Output() decreaseQty = new EventEmitter<Coin>()
  @Output() remove = new EventEmitter<Coin>()

  constructor() { }

  ngOnInit() {
    
  }

  emitIncreaseQtd(coin: Coin) {
  	this.increaseQty.emit(coin)
  }
  emitDecreaseQtd(coin: Coin) {
  	this.decreaseQty.emit(coin)
  }
   emitRemoveCoin(coin: Coin) {
  	this.remove.emit(coin)
  }
}
