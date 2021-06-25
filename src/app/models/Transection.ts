import { Itransection } from "../contracts/Itransection";

export class TransectionData implements Itransection {
    dates: number;
    amount: number;
    currencyCode: string;
    merchant: object;
    type?: string;
    categoryCode: string;
    creditDebitIndicator: string;
    
    constructor(data:Itransection){
      this.dates = data.dates;
      this.amount = data.amount;
      this.currencyCode = data.currencyCode;
      this.merchant = data.merchant;
      this.type = data.type;
      this.categoryCode = data.categoryCode;
      this.creditDebitIndicator = data.creditDebitIndicator;
    }
  
  }