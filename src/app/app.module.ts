import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { TestGridComponent } from './test-grid/test-grid.component';
import {DxDataGridModule, DxSelectBoxModule, DxTextBoxModule} from "devextreme-angular";

@NgModule({
    declarations: [
        AppComponent,
        TestGridComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DxDataGridModule,
        DxSelectBoxModule,
        DxTextBoxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
