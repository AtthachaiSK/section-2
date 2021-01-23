import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent,RoundPipe } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RoundPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
