import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { trigger, state, style, transition, animate} from "@angular/animations"
import { NotificationSummary } from './notification.summary';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
    animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]

})

export class SummaryComponent implements OnInit {
   
   name:  string
 
  constructor(private notificationSummary: NotificationSummary){ }
  
    ngOnInit() {
      this.notificationSummary.notifier.subscribe(message=>{ this.name = message })
    }

 }
