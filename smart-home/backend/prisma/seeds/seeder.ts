import { PrismaClient } from '@prisma/client';
import { devices, measures } from './data/devices';


export async function seedDb(prisma: PrismaClient, isDev: boolean): Promise<void> {
  await Promise.all(devices.map(async (device) => prisma.device.create(device)));
  await Promise.all(measures.map(async (measure) => prisma.measure.create(measure)));
}

export async function clearDb(prisma: PrismaClient, isDev: boolean): Promise<void> {
  await prisma.device.deleteMany({});
  await prisma.measure.deleteMany({});
}