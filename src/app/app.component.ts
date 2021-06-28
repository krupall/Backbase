import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Backbase';
  totalBalance: number = 0;

  sendfinalSum(event:any){
    this.totalBalance = event;
  }
}
