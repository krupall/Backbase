import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {
  transection:any ;
  formData:any;
  forSumitted:boolean = false;
  @Output() transectionObject: EventEmitter<object> = new EventEmitter();

  constructor() { }
  public amountvalue:number;
  public totalAmount:any;
  public acccountName:string ='';

  @Input() set totalBalance(value:any){
    this.totalAmount = value
  }

  ngOnInit(): void {
  }

  // add the data to transfer component
  getTheDate(){
    let date = new Date();
    let dateString = date.toString()
    let spliceDate = dateString.split(' ');
    return spliceDate[1]+'. ' +spliceDate[2];
  }

  remainingAmount(total:any, value:any){
    this.totalAmount = parseInt(total) - parseInt(value);
    return this.totalAmount
  }

  transferTheAmount(transferForm:any){
    this.formData = transferForm;
    if(this.forSumitted){
      transferForm.reset();
      this.forSumitted = false;
    }
  }

  SendMoney(){
    this.transection = {"merchantName":this.acccountName, "remainingAmount":this.remainingAmount(this.totalAmount, this.amountvalue ), "amount":(this.amountvalue * -1), currency: "€", date: this.getTheDate(), type: "Online Transfer"};
    this.forSumitted = true;
    this.transferTheAmount(this.formData);
    this.pushTheTransection(this.transection);
  }

  pushTheTransection(value:object){
    this.transectionObject.emit(value);
  }
}
