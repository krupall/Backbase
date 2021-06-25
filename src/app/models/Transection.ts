import * as contracts from "../contracts/Itransection";

export class TransectionModel implements contracts.Itransection {

  dates: any;
  amount!: number;
  currencyCode!: string;
  merchant!: object;
  categoryCode!: string;
  creditDebitIndicator!: string;
  merchantName!: string;
  date!: number;
  type!: string;
  currency!: string;
  never!: string[];

  constructor(data?: TransectionModel) {
    if (data) {
      this.dates = data?.dates;
      this.amount = data?.dates;
      this.currencyCode = data?.currencyCode;
      this.categoryCode = data?.categoryCode;
      this.creditDebitIndicator = data?.creditDebitIndicator;
      this.date = data?.date;
      this.merchantName = data?.merchantName;
      this.type = data?.type;
      this.currency = data?.currency;
    }

  }

}