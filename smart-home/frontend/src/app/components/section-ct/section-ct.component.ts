import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-ct',
  templateUrl: './section-ct.component.html',
  styleUrls: ['./section-ct.component.scss']
})
export class SectionCtComponent {

  @Input()
  title: string;
}
