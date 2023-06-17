import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  private apiUrl = 'https://v6.exchangerate-api.com/v6/82f3906f650b90104d5d68eb/pair/';

  constructor(private http: HttpClient) { }

  getConversionRate(baseCurrency: string, targetCurrency: string): Observable<number> {
    const url = `${this.apiUrl}${baseCurrency}/${targetCurrency}`;
    return this.http.get<any>(url)
      .pipe(
        map(response => response.conversion_rate)
      );
  }
}
