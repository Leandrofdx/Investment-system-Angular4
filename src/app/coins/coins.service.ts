import { Injectable  } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Coin } from "./coin/coin.model"
import { API } from '../app.api'
import { ClassError } from "../app.error"

@Injectable()
export class CoinsService {

    constructor(private http: HttpClient){}

	coins(): Observable<Coin[]> {
		return this.http.get<Coin[]>(`${API}/coins`)
		.catch(ClassError.classError)
	}
}