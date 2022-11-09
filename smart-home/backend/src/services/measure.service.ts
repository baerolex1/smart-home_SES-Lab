import { Inject, Injectable } from '@nestjs/common';
import { Measure } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { DeviceService } from './device.service';

Injectable()

export class MeasureService {

  constructor(@Inject(PrismaService) private prismaService: PrismaService, @Inject(DeviceService) private deviceService: DeviceService) {
  }

  async getAll(deviceName: string): Promise<Measure[]> {
    const deviceId = (await this.deviceService.get(deviceName)).id;
    return await this.prismaService.measure.findMany({ where: { deviceId } });
  }

  async add(deviceName: string, measure: any): Promise<Measure> {
    console.log(deviceName, measure);
    const deviceId = (await this.deviceService.get(deviceName)).id;
    return await this.prismaService.measure.create({
      data: { ...measure, deviceId },
    });
  }

  async getLastMeasure(deviceName: string): Promise<Measure> {
    const deviceId = (await this.deviceService.get(deviceName)).id;
    const measure = await this.prismaService.measure.findFirst({ where: { deviceId: deviceId }, orderBy: { createdAt: 'desc' } });
    return measure || {} as Measure;
  }

  async getMeasureForDiagram(deviceName: string, take: number): Promise<any[]> {
    const deviceId = (await this.deviceService.get(deviceName)).id;
    const results = await this.prismaService.measure.findMany({
      where: { deviceId, },
      orderBy: { createdAt: 'desc' },
      take
    });

    return results;
  }
}