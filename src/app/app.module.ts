import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrenciesCatalogComponent } from './currencies-catalog/currencies-catalog.component';
import { AppRoutingModule } from './/app-routing.module';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { CurrencySearchComponent } from './currency-search/currency-search.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesCatalogComponent,
    CurrencyDetailsComponent,
    CurrencySearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
