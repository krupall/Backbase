
import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransectionModel } from '../models/Transection';
import { TransectioDataService } from '../transectio-data.service';
import sampleData from '/Users/krupal.vasani/Assignment/Backbase/src/mock-data/transactions.json';


@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})

export class TransactionItemComponent implements OnInit {
  records: any;
  Users: TransectionModel = sampleData;
  data: any;
  public FinalData: any | undefined;

  constructor(private transectionData: TransectioDataService

  ) { }

  ngOnInit() {

    this.records = this.transectionData.getTransectionData().subscribe(
      response => {
        if (response) {
          let record = new Array(TransectionModel);
          this.renderData(record);
        }
      },
      error => {
        console.log('Unable to fetch data from API ' + error);
        this.renderData(this.Users);
      });
  }

  renderData(value: any) {
    //clearning the data 
    let filterData: { date: any; merchantName: string; amount: number; type: string; currency: any }[] = [];
    value.data.filter((element: any) => {
      filterData.push({
        date: element.dates.valueDate,
        merchantName: element.merchant.name,
        amount: this.getAmount(element.transaction),
        type: element.transaction.type,
        currency: this.getCurrencyCode(element.transaction.amountCurrency.currencyCode)
      })
    });
    if (filterData) {
      this.data = filterData;
    }
  }

  getAmount(value: any) {
    if (value.creditDebitIndicator === 'CRDT') {
      return value.amountCurrency.amount;
    } else {
      return value.amountCurrency.amount * -1;
    }
  }

  getCurrencyCode(code: string) {
    if (code === 'EUR') {
      return '€';
    }
    else if (code === 'GBP') {
      return '£';
    }
    else {
      return '$';
    }
  }
}
