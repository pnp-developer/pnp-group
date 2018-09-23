import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import * as fromComponents from './components';
import * as fromPages from './pages';

import { TranslationLoader } from './services';

import { AppComponent } from './app.component';

export function TranslationsLoaderFactory() {
  return new TranslationLoader();
}

export const routes: Routes = [
  {
    path: 'news',
    component: fromPages.NewsComponent,
  },
  {
    path: 'home',
    component: fromPages.HomeComponent,
  },
  {
    path: 'contacts',
    component: fromPages.ContactsComponent,
  },
  {
    path: 'services',
    component: fromPages.NewsComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components,
    ...fromPages.pages,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationsLoaderFactory,
      },
    }),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
