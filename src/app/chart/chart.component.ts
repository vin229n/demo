import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
@Input() chartData:any;
tempArray = new Array();
timeArray=new Array();

constructor(private datepipe:DatePipe){

}

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'temperature in ℉' },
  ];

   public lineChartLabels: Label[] = ['00', '01','02','04','05','06','07','08','09','10','11','12',
                                       '13', '14','15','16','17','18','19','20','21','22','23'];
  
  

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
  };
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  

  ngOnInit() {
    this.chartData.data.forEach(hour => {
      console.log(hour.temperature);
    });
    

    for(let i=0;i<24;i++)
    {
      this.tempArray.push( this.chartData.data[i].temperature);
      this.timeArray.push(this.datepipe.transform(this.chartData.data[i].time*1000,'hh'));
    }
    this.lineChartData[0].data = this.tempArray;
    this.lineChartLabels = this.timeArray;

  }

}
