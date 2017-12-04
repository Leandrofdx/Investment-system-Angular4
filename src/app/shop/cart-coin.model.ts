import { Coin } from '../coins/coin/coin.model'

export class CartCoin {
	  constructor(public coinItem: Coin,
              public quantity: number = 100){}

	value(): number {
		return this.coinItem.buy * this.quantity
	}
}