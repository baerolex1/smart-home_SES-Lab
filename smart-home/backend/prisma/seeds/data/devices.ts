import { Device, Measure } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { subDays, subHours, subMinutes, subMonths, subSeconds, subWeeks } from 'date-fns';

const DEVICE_CURRENT = 'SmartPlug1_Current';
const DEVICE_TEMPERATURE = 'SmartPlug2_Temperature';
const DEVICE_NO_MEASUREMENTS = 'SmartPlug3_No_Measurements';
const DEVICE_630 = 'SDM_630_EnergyMeter';

const createDate = (minusDays = 0, minusHours = 0, minusMinutes = 0, minusWeeks = 0, minusMonths = 0) => {
  return new Date(subMonths(subWeeks(subMinutes(subHours(subDays(new Date(), minusDays), minusHours), minusMinutes), minusWeeks), minusMonths).toUTCString());
}

const createActualDate = (minusSeconds: number) => {
  return new Date(subSeconds(new Date(), minusSeconds).toUTCString());
}

export const devices = [
  {
    data: {
      id: DEVICE_CURRENT,
      name: DEVICE_CURRENT,
      enabled: true,
      type: 'CURRENT'
    } as Device
  },
  {
    data: {
      id: DEVICE_TEMPERATURE,
      name: DEVICE_TEMPERATURE,
      enabled: true,
      type: 'TEMPERATURE'
    } as Device
  },
  {
    data: {
      id: DEVICE_NO_MEASUREMENTS,
      name: DEVICE_NO_MEASUREMENTS,
      enabled: true,
      tempSoll: new Decimal(4),
      type: 'TEMPERATURE'
    } as Device
  },
  {
    data: {
      id: DEVICE_630,
      name: DEVICE_630,
      enabled: true,
      type: 'CURRENT'
    } as Device
  },
];

export const measures = [
  {
    data: {
      temperatureInDegree: new Decimal(67),
      deviceId: DEVICE_TEMPERATURE
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createDate(1),
      temperatureInDegree: new Decimal(69),
      deviceId: DEVICE_TEMPERATURE
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createDate(1),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      importEnergyInkWh: new Decimal(12),
      exportEnergyInkWh: new Decimal(17),
      temperatureInDegree: new Decimal(23.54646),
      currentInAmpereL1: new Decimal(45),
      currentInAmpereL2: new Decimal(43),
      currentInAmpereL3: new Decimal(78),
      voltageInVoltL1: new Decimal(56),
      voltageInVoltL2: new Decimal(78),
      voltageInVoltL3: new Decimal(45),
      powerInWatts: new Decimal(78),
      powerInWattsL1: new Decimal(78),
      powerInWattsL2: new Decimal(324),
      powerInWattsL3: new Decimal(23),
      powerFactorL1: new Decimal(78),
      powerFactorL2: new Decimal(45),
      powerFactorL3: new Decimal(34),
      deviceId: DEVICE_630
    } as unknown as Measure
  },

  {
    data: {
      createdAt: createActualDate(0),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerInWatts: new Decimal(90),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      temperatureInDegree: new Decimal(23.54646),
      exportEnergyInkWh: new Decimal(87.12345),
      deviceId: DEVICE_CURRENT
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createActualDate(30),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerInWatts: new Decimal(33),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      importEnergyInkWh: new Decimal(23),
      exportEnergyInkWh: new Decimal(65),
      temperatureInDegree: new Decimal(22.54646),
      deviceId: DEVICE_CURRENT
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createActualDate(60),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerInWatts: new Decimal(120),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      importEnergyInkWh: new Decimal(45),
      exportEnergyInkWh: new Decimal(67),
      temperatureInDegree: new Decimal(22.54646),
      deviceId: DEVICE_CURRENT
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createActualDate(90),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerInWatts: new Decimal(20),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      importEnergyInkWh: new Decimal(12),
      exportEnergyInkWh: new Decimal(17),
      temperatureInDegree: new Decimal(22.54646),
      deviceId: DEVICE_CURRENT
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createActualDate(120),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerInWatts: new Decimal(44),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      importEnergyInkWh: new Decimal(12),
      exportEnergyInkWh: new Decimal(17),
      temperatureInDegree: new Decimal(22.54646),
      deviceId: DEVICE_CURRENT
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createActualDate(180),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerInWatts: new Decimal(20),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      importEnergyInkWh: new Decimal(77),
      exportEnergyInkWh: new Decimal(99),
      temperatureInDegree: new Decimal(22.54646),
      deviceId: DEVICE_CURRENT
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createActualDate(240),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerInWatts: new Decimal(21),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      importEnergyInkWh: new Decimal(123.556),
      exportEnergyInkWh: new Decimal(50),
      temperatureInDegree: new Decimal(22.54646),
      deviceId: DEVICE_CURRENT
    } as unknown as Measure
  },
  {
    data: {
      createdAt: createActualDate(300),
      currentInAmpere: new Decimal(79),
      voltageInVolt: new Decimal(7.55),
      powerInWatts: new Decimal(99),
      powerFactor: new Decimal(78),
      frequencyInHertz: new Decimal(12),
      importEnergyInkWh: new Decimal(98),
      exportEnergyInkWh: new Decimal(23),
      temperatureInDegree: new Decimal(22.54646),
      deviceId: DEVICE_CURRENT
    } as unknown as Measure
  },
];