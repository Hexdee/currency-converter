import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISelectOption } from 'ngx-semantic/modules/select';
import { ConversionService } from '../services/conversion.service';
import { NotificationService } from '../services/notification.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  submitted = false;
  isLoading = false;
  isRefreshing = false;
  conversionForm!: FormGroup;
  currencies: ISelectOption[] = [
    { text: "US Dollars", value: "USD" },
    { text: "Euros", value: "EUR" },
    { text: "British Pounds", value: "GBP" },
    { text: "Japanese Yen", value: "JPY" },
    { text: "Nigerian Naira", value: "NGN" }]
  conversionResult!: { rate: number, amount: number } | null;
  conversionError!: string;

  constructor(private formBuilder: FormBuilder, private conversionService: ConversionService) { }

  ngOnInit() {
    this.conversionForm = this.formBuilder.group({
      fromCurrency: ['', Validators.required],
      fromAmount: ['', Validators.required],
      toCurrency: ['', Validators.required],
      toAmount: [''],
    });
  }

  convertCurrency() {
    this.submitted = true;
    this.isLoading = true;
    this.conversionResult = null;
    this.conversionError = '';

    const fromCurrency = this.conversionForm.value.fromCurrency;
    const toCurrency = this.conversionForm.value.toCurrency;
    const fromAmount = this.conversionForm.value.fromAmount;

    if (fromCurrency === toCurrency) {
      this.conversionError = 'Cannot convert from and to the same currency.';
      this.isLoading = false
      return;
    }

    if (fromAmount <= 0) {
      this.conversionError = 'Enter a valid amount';
      this.isLoading = false;
      return;
    }

    this.conversionService.getConversionRate(fromCurrency, toCurrency).subscribe({
      next:
        (rate: number | null) => {
          if (rate) {
            const amount = +(fromAmount * rate).toFixed(2);
            this.conversionResult = { rate, amount };
            this.conversionForm.controls["toAmount"].setValue(amount);
            this.conversionError = '';
          } else {
            this.conversionError = 'Conversion rate not available.';
            this.conversionResult = null;
          }
        },
      error:
        (error: any) => {
          this.isLoading = false;
          this.conversionError = 'Error fetching conversion rates.';
          this.conversionResult = null;
          console.error('Currency conversion error:', error);
        },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  refresh() {
    this.isRefreshing = true;
    this.conversionResult = null;
    this.conversionError = "";
    this.submitted = false;
    this.conversionForm.controls["fromCurrency"].setValue('');
    this.conversionForm.controls["toCurrency"].setValue('');
    this.conversionForm.controls["fromAmount"].setValue(0.00);
    this.conversionForm.controls["toAmount"].setValue(0.00);
    this.isRefreshing = false;
  }

}
