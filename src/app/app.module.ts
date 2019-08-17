import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
