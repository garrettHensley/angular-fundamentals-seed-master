import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

import { AppComponent } from "./app.component";

@NgModule({
  // register app component in module w declaration
  declarations: [
    AppComponent, // in the future you might want to add more components
    // like navcomponent, settings component
  ],
  imports: [BrowserModule, CommonModule],

  bootstrap: [AppComponent]
}) // this appmodule is now an ngmodule
export class AppModule { }