
import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransectionModel } from '../models/Transection';
import { TransectioDataService } from '../transectio-data.service';



@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})

export class TransactionItemComponent implements OnInit {
  private mainData:any;
  records: any;
  public totalAmount: number =0;
  data: any;
  public FinalData: any | undefined;
  filteredData: any;

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
        let records = this.transectionData.getLocalData();
        this.renderData(records);
      });
  }

  renderData(value: any) {
    //sorting the data;
    value.data.sort((a: { date: number; },b: { date: number; }) => (a.date > b.date) ? -1 : 1);
    
    //clearning the data 
    let filterData: { date: any; merchantName: string; amount: number; type: string; currency: any }[] = [];
    value.data.filter((element: any) => {
      filterData.push({
        date: this.getDate(element.dates.valueDate),
        merchantName: element.merchant.name,
        amount: this.getAmount(element.transaction),
        type: element.transaction.type,
        currency: this.getCurrencyCode(element.transaction.amountCurrency.currencyCode)
      })
    });
    if (filterData) {
      this.mainData = filterData;
      this.data = filterData;

      this.calculateTotalAmount(this.data);
    }
  }

  public calculateTotalAmount(array:any){
    
    array.forEach((element:TransectionModel) => {
      debugger
      this.totalAmount +=element.amount;
    });

    localStorage.setItem('totalAmount', this.totalAmount.toFixed(2));
  }

  getDate(value:number){
    let date = new Date(value);
    let dateString = date.toString()
    let spliceDate = dateString.split(' ');
    return spliceDate[1]+'. ' +spliceDate[2];
  }

  filterData(event:any){
    this.filteredData = this.mainData.filter((val:any) => val.merchantName.toLowerCase().includes(event.toLowerCase()));
    this.data = this.filteredData;
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
