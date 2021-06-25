import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransectioDataService {

  constructor(private http: HttpClient) { }

  public getTransectionData(){
    return this.http.get('https://r9vdzv10vd.execute-api.eu-central-1.amazonaws.com/dev/transactions');
  }

  public getLocalData(){
    return this.http.get('src/mock-data/transactions.json')
  }
}
