import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import sampleData from 'src/mock-data/transactions.json';

@Injectable({
  providedIn: 'root'
})
export class TransectioDataService {

  constructor(private http: HttpClient) { }
  Users = sampleData;

  public getTransectionData(){
    return this.http.get('https://r9vdzv10vd.execute-api.eu-central-1.amazonaws.com/dev/transactions');
  }

  public getLocalData(){
    return this.Users;
  }
}
