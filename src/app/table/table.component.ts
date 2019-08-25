import { Component, OnInit, Input } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DatePipe]
})
export class TableComponent implements OnInit {
@Input() response;

chart = false;

  constructor( ) { }

  ngOnInit() { }

  toggleChart(index) {
    this.chart = !this.chart;
  }

}
