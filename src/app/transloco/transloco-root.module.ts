import {HttpClient} from '@angular/common/http';
import {Translation, TRANSLOCO_CONFIG, TRANSLOCO_LOADER, translocoConfig, TranslocoLoader, TranslocoModule} from '@ngneat/transloco';
import {Injectable, NgModule} from '@angular/core';
import {environment} from '../../environments/environment';
import {TranslocoMessageFormatModule} from '@ngneat/transloco-messageformat';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {
  }

  getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  imports: [
    TranslocoMessageFormatModule.init({
      locales: 'en-GB'
    })
  ],
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en-GB', 'de-DE'],
        defaultLang: 'en-GB',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    {provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader}
  ]
})
export class TranslocoRootModule {
}
