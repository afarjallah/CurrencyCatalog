import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-currencies-catalog',
  templateUrl: './currencies-catalog.component.html',
  styleUrls: ['./currencies-catalog.component.css']
})
export class CurrenciesCatalogComponent implements OnInit {
  currencies: Currency[] = [];
  totalItems: Number;
  totalPages: Number;
  dataAvailble = false;
  currentPage;
  itemsPerPage = "10";


  constructor(private currencyService: CurrencyService, private _changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getCurrencies(1);
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getCurrencies(this.currentPage);
  }

  optionChange() {
    this.getCurrencies(this.currentPage);
  }

  getCurrencies(pageNumber: Number):void {
    this.currencyService.getCurrencies(String(pageNumber), this.itemsPerPage)
      .subscribe(response => {
        this.currencies = response.data;
        this.totalItems = response.meta.total;
        this.dataAvailble = true;
        this._changeDetectionRef.detectChanges();
      });
  
      
    // let first_100_currencies = this.currencyService.getCurrencies('1', '100');
    // let second_100_currencies = this.currencyService.getCurrencies('2', '100');

    // forkJoin([first_100_currencies, second_100_currencies])
    //   .subscribe(results => {
    //     this.currencies = results[0].data.concat(results[1].data);
    //   });
  }

}
