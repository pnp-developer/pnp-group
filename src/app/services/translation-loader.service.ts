import { Observable, of } from 'rxjs';

import { TranslateLoader } from '@ngx-translate/core';

declare const require: any;

export class TranslationLoader implements TranslateLoader {
  getTranslation(language: string): Observable<any> {
    const translation = require(`../../assets/i18n/${language}.json`);
    return of(translation);
  }
}
