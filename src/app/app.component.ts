import { Component } from '@angular/core';

import { IO } from '@grapecity/spread-excelio';

import { sampleFile } from '../sample';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularSpreadJs';

  saveComments() {
    let sampleJson = JSON.stringify(sampleFile);

    const excelIO = new IO();
    excelIO.save(
      sampleJson,
      (res) => console.log('Success: ', res),
      (err) => console.log('Fail: ', err)
    );
  }

  ngOnInit() {
    this.saveComments();
  }
}
