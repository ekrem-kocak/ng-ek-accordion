import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgEkAccordionModule } from 'projects/ng-ek-accordion/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgEkAccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
