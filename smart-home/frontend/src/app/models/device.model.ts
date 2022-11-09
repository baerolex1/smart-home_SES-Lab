type DeviceType = 'TEMPERATURE' | 'CURRENT';

export type Device = {
  id: string
  createdAt: Date
  name: string
  enabled: boolean
  type: DeviceType
  tempSoll: number
}

export type AddNewDeviceData = {
  name: string
  enabled: boolean
  type: DeviceType
  tempSoll: number;
}