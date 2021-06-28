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
  
  ngOnInit(): void {
  }

  SendMoney(){
    console.log('money deposited')
  }
}
