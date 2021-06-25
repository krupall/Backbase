export interface Itransection {
    dates: number;
    amount: number;
    currencyCode: string;
    merchant: object;
    type?: string;
    categoryCode:string;
    creditDebitIndicator:string;
  }