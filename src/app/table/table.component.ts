import { Component, OnInit, Input } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DatePipe]
  
})
export class TableComponent implements OnInit {
@Input() response:any;
days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
date = Date.now();
dayIndex=0;
today:any;
chart:boolean[] = [false,false,false,false,false,false,false,false,false];

  constructor(private datePipe:DatePipe) { 
    this.today = this.datePipe.transform(this.date, 'EEEE');
    this.dayIndex = this.days.indexOf(this.today)
  }
  // test =  formatDate(,'dd-mm-yy','en-US');
 


  ngOnInit() {
    console.log(this.datePipe.transform(1566537278*1000,'fullDate'))
    
  }

  toggleChart(index)
  {
    this.chart[index]= !this.chart[index];
  }

}
