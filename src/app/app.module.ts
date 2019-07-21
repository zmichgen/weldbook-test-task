import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table/table.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { RxjstaskComponent } from './components/rxjstask/rxjstask.component';
import { DataService } from './services/data.service';
import { OverlayService } from './services/overlay.service';
import { FormsModule } from '@angular/forms';
import { FlowService } from './services/flow.service';

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
  providers: [DataService, OverlayService, FlowService],
  entryComponents: [TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
