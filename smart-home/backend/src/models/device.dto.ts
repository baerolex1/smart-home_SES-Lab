import { DeviceType } from '@prisma/client';

export class DeviceDto {

  name: string;
  enabled: boolean;
  type: DeviceType;
}