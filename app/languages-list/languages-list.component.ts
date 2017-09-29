/**
 * Created by vlad on 28.09.17.
 */
import {Component} from '@angular/core';
import {Language} from './language';

const LANGUAGES: Language[] = [
    {label: 'English', code: 'en'},
    {label: 'Русский', code: 'ru'},
    {label: 'Украинский', code: 'ua'},
];

const LIST_ITEMS: string[] = ['One', 'Two', 'Three'];

@Component({
    selector: 'languages-list',
    templateUrl: 'app/languages-list/languages-list.component.html',
    styleUrls: ['app/languages-list/languages-list.component.css'],
})
export class LanguagesListComponent {

    langList:Language[] = LANGUAGES;

    itememmList:Language[] = LANGUAGES;

    selectedLang:Language;

    visible:boolean;

    counter: number = 0;

    constructor() {
        let that = this;
        setInterval(function () {
            that.counter += 1;

        }, 1000);
    }

    getLiClasses(lang:Language):string {
        if (this.selectedLang != undefined && this.selectedLang.code == lang.code) {
            return 'list-item active';
        }

        return 'list-item';
    }

    onClick(lang:Language) {
        console.log(lang.label);
        this.visible = !this.visible;

        this.selectedLang = lang;
    }
}
