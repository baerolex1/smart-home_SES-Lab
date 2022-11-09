-- CreateEnum
CREATE TYPE "DeviceType" AS ENUM ('TEMPERATURE', 'CURRENT');

-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tempSoll" DECIMAL(65,30),
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "type" "DeviceType" NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measure" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "temperatureInDegree" DECIMAL(65,30),
    "currentInAmpere" DECIMAL(65,30),
    "currentInAmpereL1" DECIMAL(65,30),
    "currentInAmpereL2" DECIMAL(65,30),
    "currentInAmpereL3" DECIMAL(65,30),
    "voltageInVolt" DECIMAL(65,30),
    "voltageInVoltL1" DECIMAL(65,30),
    "voltageInVoltL2" DECIMAL(65,30),
    "voltageInVoltL3" DECIMAL(65,30),
    "powerInWatts" DECIMAL(65,30),
    "powerInWattsL1" DECIMAL(65,30),
    "powerInWattsL2" DECIMAL(65,30),
    "powerInWattsL3" DECIMAL(65,30),
    "powerFactor" DECIMAL(65,30),
    "powerFactorL1" DECIMAL(65,30),
    "powerFactorL2" DECIMAL(65,30),
    "powerFactorL3" DECIMAL(65,30),
    "frequencyInHertz" DECIMAL(65,30),
    "deviceId" TEXT,
    "importEnergyInkWh" DECIMAL(65,30),
    "exportEnergyInkWh" DECIMAL(65,30),

    CONSTRAINT "Measure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Device_name_key" ON "Device"("name");

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE SET NULL ON UPDATE CASCADE;
