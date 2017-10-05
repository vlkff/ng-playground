/**
 * Created by vlad on 26.09.17.
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import {
    AppComponent,
    routes,
    LanguagesListComponent,
    SomePageComponent,
    CounterHostComponent,
    CounterComponent,
    MytimerComponent,
    TimerComponent,
    MessageBoxComponent,
    CollapsibleBoxComponent

} from './index';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        LanguagesListComponent,
        SomePageComponent,
        CounterHostComponent,
        CounterComponent,
        MytimerComponent,
        TimerComponent,
        MessageBoxComponent,
        CollapsibleBoxComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
