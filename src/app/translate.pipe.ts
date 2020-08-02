import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from './translator.service';
import { Observable, of } from 'rxjs';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translator: TranslatorService) { }

  transform(value: string): Observable<string> {
    if (typeof value !== 'string') {
      value = value + "";
    }
    return this.translator.translateText(value);
  }

}
