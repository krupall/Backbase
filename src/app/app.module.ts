import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { FilterComponent } from './filter/filter.component';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { TransectioDataService } from './transectio-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FilterComponent,
    TransactionItemComponent,
    MakeTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TransectioDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
