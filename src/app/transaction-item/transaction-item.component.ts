import { Component, OnInit } from '@angular/core';
import { TransectionData } from '../models/Transection';
import { TransectioDataService } from '../transectio-data.service';
import sampleData from '/Users/krupal.vasani/Assignment/Backbase/src/mock-data/transactions.json'


@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})

export class TransactionItemComponent implements OnInit {
  records: any;
  Users: TransectionData = sampleData;

  constructor(private transectionData : TransectioDataService
      
    ) { }

  ngOnInit() {
    
    this.records = this.transectionData.getTransectionData().subscribe(
      response => {
        if(response){
          let record = new Array(TransectionData);
          this.renderData(record);
        }
      },
      error => {
        console.log('Unable to fetch data from API ' +error);
        this.renderData(this.Users);
      });
    }

    renderData(data: TransectionData | (typeof TransectionData)[]){
      console.log(data);
    }
}
