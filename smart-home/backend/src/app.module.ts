import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { DeviceService } from './services/device.service';
import { DeviceController } from './controllers/device.controller';
import { MeasureService } from './services/measure.service';
import { MeasureController } from './controllers/measure.controller';

@Module({
  imports: [],
  controllers: [DeviceController, MeasureController],
  providers: [PrismaService, DeviceService, MeasureService]
})
export class AppModule {
}
