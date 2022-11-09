import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Device } from '@prisma/client';
import { DeviceService } from '../services/device.service';
import { DeviceDto } from '../models/device.dto';

@Controller("api/devices")
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Get()
  async getAll(): Promise<Device[]> {
    return await this.deviceService.getAll();
  }

  @Get(':deviceName')
  async get(@Param('deviceName') deviceName: string): Promise<Device> {
    return await this.deviceService.get(deviceName);
  }

  @Put(':deviceName')
  async update(@Param('deviceName') deviceName: string, @Body() device: DeviceDto): Promise<Device> {
    return await this.deviceService.update(deviceName, device);
  }

  @Post()
  async create(@Body() device: DeviceDto): Promise<Device> {
    return await this.deviceService.create(device);
  }

  @Delete(':deviceName')
  async delete(@Param('deviceName') deviceName: string): Promise<Device> {
    return await this.deviceService.delete(deviceName);
  }
}
