/**
 * A component skeleton
 */
import {Component, QueryList, ContentChildren} from '@angular/core';
import {AfterContentInit} from '@angular/core';
import {CardComponent} from '../card/card.component';

@Component({
    moduleId: module.id,
    selector: 'cards-set',
    templateUrl: 'cards-set.component.html',
    styleUrls: ['cards-set.component.css'],
})
export class CardsSetComponent implements  AfterContentInit {

    @ContentChildren(CardComponent)
    cards: QueryList<CardComponent>;

    cards_count: number;

    ngAfterContentInit() {
        this.cards_count = this.cards.length;
    }

    showAll() {
        this.cards.forEach(function (card: Card) {
            card.show();
        })
    }

    hideAll() {
        this.cards.forEach(function (card: Card) {
            card.hide();
        })
    }
}
