import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeviceOverviewComponent } from './components/device-overview/device-overview.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { SectionCtComponent } from './components/section-ct/section-ct.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceService } from './services/device.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewDeviceComponent } from './components/add-new-device/add-new-device.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { YesNoComponent } from './components/yes-no/yes-no.component';
import { CurrentDataComponent } from './components/current-data/current-data.component';
import { WattDiagramComponent } from './components/watt-diagram/watt-diagram.component';
import { MeasureService } from './services/measure.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { TemperatureDiagramComponent } from './components/temperature-diagram/temperature-diagram.component';
import { SDM630DiagramComponent } from './components/SDM630-diagram/SDM630-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    DeviceOverviewComponent,
    SectionCtComponent,
    AddNewDeviceComponent,
    YesNoComponent,
    CurrentDataComponent,
    WattDiagramComponent,
    TemperatureDiagramComponent,
    SDM630DiagramComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDividerModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
    HighchartsChartModule
  ],
  providers: [DeviceService, MeasureService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
