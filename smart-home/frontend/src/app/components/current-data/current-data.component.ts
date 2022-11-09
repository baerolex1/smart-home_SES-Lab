import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MeasureService } from '../../services/measure.service';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-current-data',
  templateUrl: './current-data.component.html',
  styleUrls: ['./current-data.component.scss']
})
export class CurrentDataComponent implements OnChanges {

  @Input()
  devices: Device[];

  devicesWithMeasure: {measure: any, device: Device}[] = [];

  // 30 Seconds
  private REFRESH_INTERVAL = 30 * 1000;

  constructor(private measureService: MeasureService) {
    setInterval(async () => await this.reload(), this.REFRESH_INTERVAL);
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    await this.reload();
  }

  async reload(): Promise<void> {
    this.devicesWithMeasure = [];
    for (const device of this.devices) {
      const measure = await this.measureService.getLastMeasure(device.name);
      this.devicesWithMeasure.push({device, measure});
    }
  }

  jsonFormat(obj: any): string {
    return JSON.stringify(obj, undefined, 4);
  }

  round(value: string) {
    return (parseFloat(value)).toFixed(2);
  }

}
