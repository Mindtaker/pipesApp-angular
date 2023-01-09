import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//Change app locale
import localeEsAr from "@angular/common/locales/es-AR";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsAr);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
