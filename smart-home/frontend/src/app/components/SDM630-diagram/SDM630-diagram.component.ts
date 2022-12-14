import { Component, Input, SimpleChanges } from '@angular/core';
import { Device } from '../../models/device.model';
import * as Highcharts from 'highcharts';
import { Chart, Options } from 'highcharts';
import { MeasureService } from '../../services/measure.service';
import { format, subDays } from 'date-fns';

@Component({
  selector: 'app-SDM630-diagram',
  templateUrl: './SDM630-diagram.component.html'
})
export class SDM630DiagramComponent {

  Highcharts = Highcharts;

  @Input()
  devices: Device[];

  lineChartOptions: Options;

  private chart: Chart;

  updateFlag: boolean;

  initialLoaded: boolean = false;

  // 10 Seconds
  private REFRESH_INTERVAL = 10 * 1000;
  private NUMBER_OF_ENTRIES = 120;

  constructor(private readonly measureService: MeasureService) {
    setInterval(async () => {await this.refresh();}, this.REFRESH_INTERVAL);
  }

  async initialLoad() {
    if(this.devices.length === 0) {
      return;
    }

    const series = await this.getSeries()
    this.lineChartOptions = {
      series: series,
      chart: {
        type: 'spline',
      },
      title: {
        text: 'Power Consumption per phase'
      },
      tooltip: {
        valueSuffix: ' W'
      },
      yAxis: {
        min: 0,
        startOnTick: false,
        title: {
          text: 'Power [W]'
        }
      },
      xAxis: {
        categories: this.getXAxis(),
        title: {
          text: 'Measures in seconds ago'
        }
      },

    };

    if (series.length > 0) {
      this.initialLoaded = true;
    }
  }

  async ngOnChanges(changes: SimpleChanges) {
    if(this.initialLoaded) {
      await this.refresh();
    }
    else {
      await this.initialLoad();
    }
  }

  async refresh() {
    this.lineChartOptions.series = await this.getSeries();
    this.updateFlag = true;
    this.initialLoaded = true;
  }

  setChart(chart: Chart) {
    this.chart = chart;
  }

  private getRandom = () => Math.floor(Math.random() * 1000);

  private async getSeries() {
    const series = [];
    const devices = this.devices.filter((device) => device.name.includes('630'));
    for (const device of devices) {
      // Get one more entry for the difference
      const values = await this.measureService.getDiagramValues(device.name, this.NUMBER_OF_ENTRIES + 1);

      // L1
      const usedValuesL1 = this.adjustValuesWithZeros(values.map((entry) => parseFloat(parseFloat(entry['powerInWattsL1']).toFixed(2))));
      series.push({
        name: 'Phase L1',
        data: usedValuesL1
      });

      // L2
      const usedValuesL2 = this.adjustValuesWithZeros(values.map((entry) => parseFloat(parseFloat(entry['powerInWattsL2']).toFixed(2))));
      series.push({
        name: 'Phase L2',
        data: usedValuesL2
      });

      // L3
      const usedValuesL3 = this.adjustValuesWithZeros(values.map((entry) => parseFloat(parseFloat(entry['powerInWattsL3']).toFixed(2))));
      series.push({
        name: 'Phase L3',
        data: usedValuesL3
      });
    }

    return series;
  }

  private adjustValuesWithZeros(values: any[]) {
    const valuesNew = [...values];
    while(valuesNew.length < this.NUMBER_OF_ENTRIES+1) {
      valuesNew.unshift(0);
    }
    return valuesNew;
  }

  private getXAxis(): string[] {
    let result = [];
      for (let i = 0; i <= this.NUMBER_OF_ENTRIES; i++) {
        const seconds = (i+1) * 30;
        result.push(`${seconds} Seconds`);
      }

    return result;
  }
}
