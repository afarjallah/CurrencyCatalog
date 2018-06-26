import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  private currencyData: any;

  constructor(private currencyService : CurrencyService, private route : ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getCurrency();
  }
  
  getCurrency(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.currencyService.getCurrency(id)
      .subscribe(response => this.currencyData = response.data);
  }

  goBack():void {
    this.location.back();
  }

}
