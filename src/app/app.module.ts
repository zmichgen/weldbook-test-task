import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table/table.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { RxjstaskComponent } from './components/rxjstask/rxjstask.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StartPageComponent,
    RxjstaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],

  entryComponents: [TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
