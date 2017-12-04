import { CartCoin } from './cart-coin.model'
import { Coin } from '../coins/coin/coin.model'
import { Injectable } from '@angular/core'
import { NotificationService } from '../shared/snackbar/notification.service';

@Injectable()
export class ShopService {

	constructor(private notificationService: NotificationService){}
	coins: CartCoin[] = []

	addCoin(coin: Coin){
		
		let foundCoin = this.coins.find((mCoins) => mCoins.coinItem.id == coin.id)

		if(foundCoin) {
			this.increaseQty(foundCoin)
		} else {
			this.coins.push(new CartCoin(coin))
		}
		this.notificationService.notify(`Added ${coin.name}`)
	}

	increaseQty(coin) {
		coin.quantity = coin.quantity + 100
		this.notificationService.notify(`+ 100 ${coin.coinItem.name}`)
	}
	decreaseQty(coin : CartCoin) { 
		coin.quantity = coin.quantity - 100
		this.notificationService.notify(` - 100 ${coin.coinItem.name}`)
		if(coin.quantity === 0) {
			this.removeCoin(coin)
		}
	}

	removeCoin(coin: CartCoin){
		this.coins.splice(this.coins.indexOf(coin), 1)
		this.notificationService.notify(`Removed ${coin.coinItem.name}`)
	}

	clear(){
		this.coins = []
	}

	total(): number{
		return this.coins.map(coin => coin.value()).reduce((prev, value)=> prev+value, 0)
	}
}