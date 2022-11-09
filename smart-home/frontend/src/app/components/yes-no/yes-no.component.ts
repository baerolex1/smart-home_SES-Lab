import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
})
export class YesNoComponent {

  constructor(
    public dialogRef: MatDialogRef<YesNoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
