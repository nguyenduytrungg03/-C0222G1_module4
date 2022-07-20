import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularCountdownTimeAppComponent } from './angular-countdown-time-app/angular-countdown-time-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularCountdownTimeAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
