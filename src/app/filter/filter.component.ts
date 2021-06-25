import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges{
  trasectionValue:any
  @Output() inputChange: EventEmitter<any> = new EventEmitter();
  @Input() set filterdata(value: any) {
    if (value) {
      this.trasectionValue = value;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any): void {
    this.inputChange.emit(event.value);
  }

  ngOnChanges(){
    console.log(this.trasectionValue)
  }

}
