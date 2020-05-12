import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-color',
  templateUrl: './info-color.component.html',
  styleUrls: ['./info-color.component.css']
})
export class InfoColorComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  content: String = 'tôi yêu viêt nam';

  // tslint:disable-next-line: no-input-rename
  @Input('color') infoColor: string;
  // tslint:disable-next-line: no-input-rename
  @Input('arryColor') arryColor: string[];

  customColor() {
    return{
    'background-color': this.arryColor[0],
    color: this.arryColor[1]
    };
  }
  constructor() { }

  ngOnInit() {
  }
}
