/**
 * Created by vlad on 26.09.17.
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { LanguagesListComponent } from './languages-list/languages-list.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, LanguagesListComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
