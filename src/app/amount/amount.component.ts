import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

	@Input() fee: number
	@Input() coinsValue: number
    

  constructor() { }

  ngOnInit() {
  }

  total(): number {
  	return this.coinsValue + ((this.coinsValue * 20) / 100)
  }
}
