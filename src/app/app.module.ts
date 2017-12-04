import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'
import { AppComponent } from './app.component';


import { AppBootstrapModule } from './bootstrap/app-bootstrap.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FinalizeInvestmentComponent } from './finalize-investment/finalize-investment.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinComponent } from './coins/coin/coin.component';

import { CoinsService } from './coins/coins.service';
import { ShopService } from './shop/shop-service';
import { NotificationService } from './shared/snackbar/notification.service';
import { NotificationSummary } from './summary/notification.summary';

import { FinalizeService } from './finalize-investment/finalize.service'
import { ShopComponent } from './shop/shop.component';
import { InputComponent } from './shared/input/input.component';
import { FinalizeItemComponent } from './finalize-investment/finalize-item/finalize-item.component';
import { AmountComponent } from './amount/amount.component';
import { ChartsModule } from 'ng2-charts';
import { BaseChartComponent } from './base-chart/base-chart.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FinalizeInvestmentComponent,
    CoinsComponent,
    CoinComponent,
    ShopComponent,
    InputComponent,
    FinalizeItemComponent,
    AmountComponent,
    BaseChartComponent,
    SnackbarComponent,
    NotFoundComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    ChartsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, CoinsService, ShopService, FinalizeService, BaseChartComponent, NotificationService, NotificationSummary],
  bootstrap: [AppComponent]
})
export class AppModule { }
