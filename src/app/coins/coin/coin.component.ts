import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Coin } from './coin.model';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
	
  @Input() coin: Coin
    @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

    emitAddEvent(){
    this.add.emit(this.coin)
  }



}

