import { TransectioDataService } from './../transectio-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {

  constructor() { }
  amountvalue:number | undefined;
  acccountName:string ='';
  

  //todo - form valudation

  //todo - get the total from transfer component
  getThetotalAmount(){
  }

  //todo - add the data to transfer component
  
  ngOnInit(): void {
  }


  transferTheAmount(transferForm:any){
  }
  SendMoney(){
    console.log('money deposited')
  }
}
