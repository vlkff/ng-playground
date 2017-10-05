/**
 * A card component.
 */
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
})
export class CardComponent {

    protected  visible: boolean = false;

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
