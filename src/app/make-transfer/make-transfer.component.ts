import { Component, OnInit, Input } from '@angular/core';

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

  @Input() set totalBalance(value:any){
    this.totalAmount = value
  }

  //todo - form valudation


  //todo - add the data to transfer component
  
  ngOnInit(): void {
    
  }

  //todo - get the total from transfer component
  

  transferTheAmount(transferForm:any){
  }
  SendMoney(){
    console.log('money deposited')
  }
}
