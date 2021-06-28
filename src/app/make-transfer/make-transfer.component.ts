import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {

  constructor() { }
  amountvalue:number | undefined;
  totalAmount:any;
  acccountName:string ='';
  

  //todo - form valudation


  //todo - add the data to transfer component
  
  ngOnInit(): void {
    this.getThetotalAmount();
  }

  //todo - get the total from transfer component
  getThetotalAmount(){
    this.totalAmount = 4423
  }

  transferTheAmount(transferForm:any){
  }
  SendMoney(){
    console.log('money deposited')
  }
}
