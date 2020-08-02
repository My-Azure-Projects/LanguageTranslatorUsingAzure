import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { TranslatorService } from './translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  laungages = [{
    name: "English",
    value: "en"
  },
  {
    name: "Hindi",
    value: "hi"
  },
  {
    name: "Marathi",
    value: "mr"
  },
  {
    name: "Gujrati",
    value: "gu"
  }];

  public translator: TranslatorService;

  constructor(private translatorService: TranslatorService, private changeDetector:ChangeDetectorRef) {
    this.translator = translatorService;
    translatorService.translateText("Hello World").subscribe((data) => console.log(data));
  }

  onChange() {
    console.log(this.translator.lang);
    localStorage.setItem('lamguage', this.translator.lang);
    window.location.reload();
  }

}
