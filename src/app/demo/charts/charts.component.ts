import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexChart,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [10, 41, 35, 51, 91, 148],
      chart: {
        height: '500px',
        type: 'donut',
      },
      title: {
        text: 'Angular Chart',
      },
      legend: {
        show: false,
      },
    };
  }
}
