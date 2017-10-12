/**
 * Created by vlad on 26.09.17.
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

import {
    AppComponent,
    LanguagesListComponent,
    SomePageComponent,
    CounterHostComponent,
    CounterComponent,
    MytimerComponent,
    TimerComponent,
    MessageBoxComponent,
    CollapsibleBoxComponent,
    CardComponent,
    CardsPageComponent,
    CardsSetComponent,
    CardsProvider
} from './index';

import {routes} from './routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LanguagesListComponent,
        SomePageComponent,
        CounterHostComponent,
        CounterComponent,
        MytimerComponent,
        TimerComponent,
        MessageBoxComponent,
        CollapsibleBoxComponent,
        CardComponent,
        CardsPageComponent,
        CardsSetComponent
    ],
    providers: [CardsProvider]
})
export class AppModule {

}
