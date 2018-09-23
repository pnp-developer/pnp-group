import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pnp-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('ru');
  }

  ngOnInit() {}

  selectLanguage(language: string) {
    if (language) {
      this.translateService.use(language);
    }
  }
}
