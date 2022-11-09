import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { AddNewDeviceData, Device } from '../../models/device.model';
import { MatDialog } from '@angular/material/dialog';
import { AddNewDeviceComponent } from '../add-new-device/add-new-device.component';
import { YesNoComponent } from '../yes-no/yes-no.component';

@Component({
  selector: 'app-device-overview',
  templateUrl: './device-overview.component.html',
  styleUrls: ['./device-overview.component.scss']
})
export class DeviceOverviewComponent implements OnInit {

  devices: Device[] = [];
  devicesVisible: Device[] = [];

  constructor(private deviceService: DeviceService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.loadDevices();
  }

  async loadDevices(): Promise<void> {
    this.devices = await this.deviceService.loadDevices().toPromise();
    this.devicesVisible = this.devices.filter((value) => !value.name.includes('630'));
  }

  async updateDevice(device: Device): Promise<void> {
    device.enabled = !device.enabled;
    await this.deviceService.updateDevice(device).toPromise();
  }

  getSliderTooltip(device: Device): string {
    return `${device.enabled ? 'Disable' : 'Enable'} device ${device.name}`;
  }

  addNew(): void {
    this.dialog.open(AddNewDeviceComponent, {
      width: '300px',
    }).afterClosed().subscribe(async (data: AddNewDeviceData) => {
      if(data) {
        await this.deviceService.add(data).toPromise();
        await this.loadDevices();
      }
    });
  }

  remove(device: Device): void {
    this.dialog.open(YesNoComponent, {
      width: '300px',
      data: device
    }).afterClosed().subscribe(async (shouldDelete: boolean) => {
      if(shouldDelete) {
        await this.deviceService.delete(device).toPromise();
        await this.loadDevices();
      }
    });
  }

}
