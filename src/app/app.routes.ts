import { Routes } from '@angular/router';
import { HomeComponent }  from './home/home.component'
import { FinalizeInvestmentComponent } from './finalize-investment/finalize-investment.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { SummaryComponent } from './summary/summary.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'finalize', component: FinalizeInvestmentComponent},
    {path: 'summary', component: SummaryComponent},
    {path: '**', component: NotFoundComponent}
  
]