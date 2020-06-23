import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c/c1/c1.component';
import { AppHighightDirective } from './d/app-highight.directive';
import { ResultsComponent } from './c/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
   
    AppHighightDirective,
   
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
