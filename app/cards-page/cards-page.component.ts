/**
 * Demo components interaction and bindings
 */
import {Component, OnInit} from '@angular/core';
//import {Card} from '../card/card.component';
import {CardDataRow} from '../index';
import {CardsProvider} from '../services/CardsProvider/CardsProvider';

@Component({
    moduleId: module.id,
    selector: 'cards-page',
    templateUrl: 'cards-page.component.html',
    styleUrls: ['cards-page.component.css']
    //providers: [CardsProvider]
})
export class CardsPageComponent implements OnInit {
    cards: Array<CardDataRow>;

    special: CardDataRow = {
        first: 'Vlad', last: 'Bogatyrov'
    };

    specialFirst: string = 'Vlad';
    specialLast: string = 'Bogatyrov';

    constructor (private dataProvider: CardsProvider) {
    }

    ngOnInit () {
        this.cards = this.dataProvider.getData();
        console.log(this);
        let that = this;
        setInterval(function () {
            that.cards.forEach(function (card) {
                card.first = card.first + '_';
                card.last = '_' + card.last;
            })
        }, 2000);
    }
}
