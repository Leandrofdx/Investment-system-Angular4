import { Component, OnInit, Injectable } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
import { FinalizeService } from './finalize.service'
import { Finalize, FinalizeItem } from  './finalize.model'
import {trigger, state, style, transition, animate} from '@angular/animations'
import { Router } from '@angular/router';
import { NotificationSummary } from '../summary/notification.summary';

@Component({
  selector: 'app-finalize-investment',
  templateUrl: './finalize-investment.component.html',
  styleUrls: ['./finalize-investment.component.css'],
  animations: [
    trigger('triggerFinalize', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})

@Injectable()
export class FinalizeInvestmentComponent implements OnInit {
  constructor(private finalizeService: FinalizeService,  private formBuilder: FormBuilder, private router: Router, private notificationSummary: NotificationSummary) { }

  FinalizeState = 'ready'

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/
  
  coinForm: FormGroup

    ngOnInit() {
    this.coinForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required]),
      payment: this.formBuilder.control('', [Validators.required])
    }, {validator: FinalizeInvestmentComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  }

  fee: number = 8

  iconsValue(): number {
    return this.finalizeService.iconsValue()
  }


  coinItems() {
    return this.finalizeService.coinItems()
  }

  increaseQty(coin: any) {
  	this.finalizeService.increaseQty(coin)
  }

  decreaseQty(coin: any) {
  	this.finalizeService.decreaseQty(coin)
  }

  remove(coin: any) {
  	this.finalizeService.remove(coin)
  }
  
  checkout(investiment: Finalize) {
  
     
    // investiment.FinalizeItem =  this.coinItems()
       // .map((coin:any)=> new FinalizeItem(coin.coinItem.id, coin.coinItem.name, coin.coinItem.buy, coin.quantity))
       // this.finalizeService.finalizeCoin(investiment).subscribe((investimentId: string) => {
     this.router.navigate(['/summary'])
       //      this.finalizeService.clear()
            
       // })
  }
}


