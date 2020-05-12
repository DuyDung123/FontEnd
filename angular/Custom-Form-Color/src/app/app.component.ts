import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Custom-Form-Color';

  // tslint:disable-next-line: ban-types
  colorList: String[] = ['Red', 'Blue', 'Orange', 'Custom'];
  // tslint:disable-next-line: ban-types
  color: String[] = ['', ''];
  // tslint:disable-next-line: ban-types
  colorInputCustom: String[] = ['#808040', '#ffffff'];
  // tslint:disable-next-line: ban-types
  textColor: String = this.colorList[0];

  changeColor(theme) {
    this.textColor = theme;
    console.log(theme);
  }
  changeTextColor(event) {
    console.log(event.target.value);
    this.color[1] = event.target.value;
  }
  changeBg(event) {
    console.log(event.target.value);
    this.color[0] = event.target.value;
  }
}
