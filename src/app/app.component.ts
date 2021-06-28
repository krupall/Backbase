import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Backbase';
  public totalBalance: number = 0;
  public transectionData:object = [];

  sendfinalSum(event:number){
    this.totalBalance = event;
  }

  pushTheTransection(event:object){
    this.transectionData = event;
  }
}
