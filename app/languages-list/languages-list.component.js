"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by vlad on 28.09.17.
 */
var core_1 = require("@angular/core");
var LANGUAGES = [
    { label: 'English', code: 'en' },
    { label: 'Русский', code: 'ru' },
    { label: 'Украинский', code: 'ua' },
];
var LanguagesListComponent = /** @class */ (function () {
    function LanguagesListComponent() {
        this.langList = LANGUAGES;
        this.counter = 0;
        var that = this;
        setInterval(function () {
            that.counter += 1;
        }, 1000);
    }
    LanguagesListComponent.prototype.getLiClasses = function (lang) {
        if (this.selectedLang != undefined && this.selectedLang.code == lang.code) {
            return 'list-item active';
        }
        return 'list-item';
    };
    LanguagesListComponent.prototype.onClick = function (lang) {
        console.log(lang.label);
        this.visible = !this.visible;
        this.selectedLang = lang;
    };
    LanguagesListComponent = __decorate([
        core_1.Component({
            selector: 'languages-list',
            templateUrl: 'app/languages-list/languages-list.component.html',
            styleUrls: ['app/languages-list/languages-list.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], LanguagesListComponent);
    return LanguagesListComponent;
}());
exports.LanguagesListComponent = LanguagesListComponent;
//# sourceMappingURL=languages-list.component.js.map