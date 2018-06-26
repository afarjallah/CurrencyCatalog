import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesCatalogComponent } from './currencies-catalog/currencies-catalog.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/currencies', pathMatch: 'full' },
  { path: 'currencies', component: CurrenciesCatalogComponent},
  { path: 'currency/:id', component: CurrencyDetailsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
