import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { NgbxDataTableModule } from 'ngbx-data-table';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgbPaginationModule,
		NgbxDataTableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
