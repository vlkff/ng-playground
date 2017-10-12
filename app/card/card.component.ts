/**
 * A card component.
 * Demo 3 way of bindings.
 * Demo classes directives
 */
import {Component, Input} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
})
export class CardComponent {

    protected  visible: boolean = true;

    @Input()
    first: string = 'default fist name';

    @Input()
    last: string = 'default last name';

    classes = {
        background: true,
        border: true,
        capital: true,
    };

    age: number = 0;

    height: number = 0;

    weight: number = 0;

    picSrc: string = 'http://dreamicus.com/data/face/face-06.jpg';

    picTitle: string;

    constructor () {
        this.picTitle = this.getFullName();
    }

    printAge() {
        if (this.age == false) {
            let msg = "I am " + this.getFullName() + " and I do not remember";

        } else {
            let msg = "I am " + this.getFullName() + " and I am " + this.age;
        }
        alert(msg);
    }

    printHeight() {
        if (this.height == false) {
            let msg = "I am " + this.getFullName() + " and I do not remember my height";

        } else {
            let msg = "I am " + this.getFullName() + " and my height is " + this.height;
        }
        alert(msg);
    }

    printWeight() {
        if (this.weight == false) {
            let msg = "I am " + this.getFullName() + " and I do not remember my weight";

        } else {
            let msg = "I am " + this.getFullName() + " and my weight is " + this.weight;
        }
        alert(msg);
    }

    getFullName () {
        return this.first + '_' + this.last;
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
