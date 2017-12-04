import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coin } from '../coins/coin/coin.model'
import { Order, OrderItem } from './chart.model'
import { CartCoin } from '../shop/cart-coin.model'

@Component({
  selector: 'app-base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.css']
})
export class BaseChartComponent implements OnInit {

 @Input() coins: Coin[]

 ngOnInit() {
  	this.grafic()
  }

	public grafic() {

		var clone = JSON.parse(JSON.stringify(this.coins))
		var labelData: any[] = []
		var data:any[] = []

	  	for (var i = clone.length - 1; i >= 0; i--) {
	  		labelData.push(clone[i].coinItem.name)
	  		data.push(clone[i].quantity * clone[i].coinItem.buy)
	  	}

      if(data.length != 0) {
  	     this.doughnutChartData = data;
	       this.doughnutChartLabels = labelData
      }
	}

  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public doughnutChartColors:Array<any> = [
    { // grey
      backgroundColor: ['rgba(119,1,177,0.2)', 'rgba(119,1,47,0.2)', 'rgba(11,11,477,0.2)', 'rgba(410,11,457,0.2)'],
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(001,335,177,0.8)'
    }
  ];
}