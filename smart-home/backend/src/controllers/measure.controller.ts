import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Measure } from '@prisma/client';
import { MeasureService } from '../services/measure.service';
import { DiagramType } from '../models/diagram-type';

@Controller("api/measurements")
export class MeasureController {
  constructor(private measureService: MeasureService) {}

  @Get(':deviceName')
  async getAll(@Param('deviceName') deviceName: string): Promise<Measure[]> {
    return await this.measureService.getAll(deviceName);
  }

  @Post(':deviceName')
  async add(@Param('deviceName') deviceName: string, @Body() measure: any): Promise<Measure> {
    return await this.measureService.add(deviceName, measure);
  }

  @Get('/last/:deviceName')
  async getLastMeasure(@Param('deviceName') deviceName: string): Promise<Measure> {
    return await this.measureService.getLastMeasure(deviceName);
  }

  @Get('/diagram/:deviceName/:take')
  async getMeasuresForDiagram(@Param('deviceName') deviceName: string, @Param('take') take: string): Promise<any[]> {
    return await this.measureService.getMeasureForDiagram(deviceName, parseInt(take, 10));
  }
}