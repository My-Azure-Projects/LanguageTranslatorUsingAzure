import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule, MatFormFieldModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TranslatePipe } from './translate.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
