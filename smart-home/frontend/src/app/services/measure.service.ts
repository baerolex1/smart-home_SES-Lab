import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../constants/url.constant';

@Injectable()
export class MeasureService {
  constructor(private http: HttpClient) { }

  getLastMeasure(deviceName: string): Promise<any> {
    return this.http.get<any>(BACKEND_URL.LAST_MEASURE.replace('{{deviceName}}', deviceName)).toPromise()
  }


  getDiagramValues(deviceName: string, take: number): Promise<number[]> {
    let url = BACKEND_URL.DIAGRAM_VALUES.replace('{{deviceName}}', deviceName);
    url = url.replace('{{take}}', take.toString());
    return this.http.get<number[]>(url).toPromise()
  }
}