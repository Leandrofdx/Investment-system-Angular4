import { Injectable } from '@angular/core'
import { ShopService } from '../shop/shop-service'
import { CartCoin } from '../shop/cart-coin.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { API } from '../app.api'
import { Finalize } from './finalize.model'

@Injectable()
export class FinalizeService {
	constructor(private shopService: ShopService, private http: HttpClient) {}

  iconsValue(): number {
    return this.shopService.total()
  }

	coinItems(): CartCoin[] {
		return this.shopService.coins
	}

	  increaseQty(coin  : CartCoin) {
	  	this.shopService.increaseQty(coin)

	  }

	  decreaseQty(coin : CartCoin) {
	  	this.shopService.decreaseQty(coin)
	  }

	  remove(coin : CartCoin) {
	  	this.shopService.removeCoin(coin)
	  }

	  finalizeCoin(investiment: Finalize): Observable<string> {
        return this.http.post<Finalize>(`${API}/orders`, investiment).map(investiment => investiment.name)
	  }
	   clear(){
        this.shopService.clear()
    }

}
