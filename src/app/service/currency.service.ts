import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../model/currency';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currenciesUrl = 'https://api.openfintech.io/v1/currencies';

  constructor(private http:HttpClient) { }

  getCurrencies(pageNumber: String, pageSize: String): Observable<any> {
    const url = `${this.currenciesUrl}?page[number]=${pageNumber}&page[size]=${pageSize}`
    return this.http.get(url);
  }

  getCurrency(id: String): Observable<any> {
    const url = `${this.currenciesUrl}/${id}`;
    return this.http.get(url);
  }

  // buildUrl(pageNumber: String, pageSize: String) : String {
  //   return 
  // }
}
