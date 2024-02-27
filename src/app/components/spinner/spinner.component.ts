import { NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true,
  imports: [
    NgIf
  ]
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) {}
}
