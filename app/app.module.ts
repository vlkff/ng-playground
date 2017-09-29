/**
 * Created by vlad on 26.09.17.
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";

import { LanguagesListComponent } from './languages-list/languages-list.component';
import { SomePageComponent } from './some-page/some-page.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'languages', component: LanguagesListComponent },
            { path: 'some-page', component: SomePageComponent },
            { path: '', redirectTo: 'some-page', pathMatch: 'full' }
        ])
    ],
    declarations: [AppComponent, LanguagesListComponent, SomePageComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
